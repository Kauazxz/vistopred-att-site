"""
Gera 4 variantes de cor do relógio (clock-iso-premium) pra comparação visual.
Output: C:/Users/kauaa/3d-icons-library/selection/recolored-cyan/samples/
"""

import colorsys
from pathlib import Path
from PIL import Image

ORIG = Path(r"C:/Users/kauaa/3d-icons-library/selection/recolored-cyan/_originals/tempo.png")
OUT  = Path(r"C:/Users/kauaa/3d-icons-library/selection/recolored-cyan/samples")
OUT.mkdir(parents=True, exist_ok=True)

# (label, hue_target_deg ou None pra apenas dessaturar/branquear, sat_factor)
VARIANTS = [
    ("01-gold-original",  None,  1.0),    # baseline (cópia)
    ("02-white-silver",   None,  0.0),    # mantém luminosidade, zera saturação = prata
    ("03-electric-blue",  220,   1.2),    # azul elétrico saturado
    ("04-lime-green",     90,    1.1),    # verde-limão vibrante
    ("05-magenta-pink",   320,   1.1),    # rosa choque
    ("06-amber-warm",     38,    1.0),    # amber/laranja quente
]

GOLD_HUE_MIN = 25
GOLD_HUE_MAX = 70
MIN_SAT = 0.18


def recolor(src: Path, dst: Path, target_hue_deg, sat_factor: float):
    img = Image.open(src).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            hh, ss, vv = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            hue_deg = hh * 360
            if GOLD_HUE_MIN <= hue_deg <= GOLD_HUE_MAX and ss >= MIN_SAT:
                new_h = hh if target_hue_deg is None else (target_hue_deg / 360)
                new_s = min(1.0, ss * sat_factor)
                nr, ng, nb = colorsys.hsv_to_rgb(new_h, new_s, vv)
                px[x, y] = (int(nr * 255), int(ng * 255), int(nb * 255), a)
    img.save(dst, "PNG", optimize=True)


for label, hue, sat in VARIANTS:
    out_path = OUT / f"clock-{label}.png"
    recolor(ORIG, out_path, hue, sat)
    print(f"OK {out_path.name}")
