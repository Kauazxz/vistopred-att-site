"""
Recolore PNGs 3D do 3dicons.co (premium iso) trocando o DOURADO por CYAN
e mantendo o NAVY intacto.

Estratégia:
- Converte cada pixel pra HSL
- Pixels com hue quente (amarelo/dourado, hue ~30-65°) E saturação > limiar
  → recoloca com cyan (hue ~190°), preservando luminância e saturação
- Pixels frios (navy, hue ~210-240°) → mantém intacto
- Pixels neutros (sombras pretas) → mantém intacto
"""

import sys
import colorsys
from pathlib import Path
from PIL import Image

SRC_DIR  = Path(r"D:/Projetos/vistopred-site/public/images/icons/3d")
OUT_DIR  = SRC_DIR  # sobrescreve in-place

# Hue alvo (azul elétrico). 220° / 360° = 0.611
TARGET_HUE = 220 / 360

# Boost de saturação pra dar mais "elétrico"
SAT_FACTOR = 1.2

# Faixa do dourado a recolorir (em graus, hue HSV)
GOLD_HUE_MIN = 25
GOLD_HUE_MAX = 70

# Saturação mínima pra considerar "colorido" (não cinza/sombra)
MIN_SAT = 0.18


def recolor(src_path: Path, dst_path: Path) -> None:
    img = Image.open(src_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    swapped = 0

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue

            # RGB → HSV (0-1)
            hh, ss, vv = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            hue_deg = hh * 360

            # Pixel é "dourado" se hue está na faixa quente E é colorido o bastante
            if GOLD_HUE_MIN <= hue_deg <= GOLD_HUE_MAX and ss >= MIN_SAT:
                # Troca hue + boosta saturação pra ficar mais "elétrico"
                new_sat = min(1.0, ss * SAT_FACTOR)
                nr, ng, nb = colorsys.hsv_to_rgb(TARGET_HUE, new_sat, vv)
                pixels[x, y] = (
                    int(nr * 255),
                    int(ng * 255),
                    int(nb * 255),
                    a,
                )
                swapped += 1

    img.save(dst_path, "PNG", optimize=True)
    print(f"OK {src_path.name}: {swapped} pixels recolored")


def main():
    targets = ["tempo.png", "tarefas.png", "pessoal.png", "seguranca.png", "historico.png"]
    for name in targets:
        src = SRC_DIR / name
        if not src.exists():
            print(f"SKIP {name} (not found)")
            continue
        recolor(src, OUT_DIR / name)


if __name__ == "__main__":
    main()
