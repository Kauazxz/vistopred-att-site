# VistoPred · Design System

Documento vivo do sistema visual do site. Cada decisão aqui está implementada em
CSS / componentes Astro — se mudar aqui, também atualize os arquivos referenciados.

> **Estilo geral**: tech editorial. Mistura de SaaS premium (Vercel/Linear:
> tipografia generosa, espaçamento amplo, dark mode autêntico) com calor de app
> de consumidor (celular protagonista, cards flutuando, microanimações). Vibe
> de **engenharia técnica** — confiável, profissional, moderno.

---

## 1 · Cores

Todas as cores vivem como **CSS variables** em [`src/styles/theme.css`](../src/styles/theme.css).
Tema claro é default; tema escuro é ativado por `data-theme="dark"` no `<html>`.

### Tokens base

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--bg` | `#f6f8fc` | `#070b15` | Fundo primário da página |
| `--bg-elev` | `#ffffff` | `#0d1322` | Fundo elevado (footer, mockups) |
| `--surface` | `#ffffff` | `#111a2e` | Cards, painéis |
| `--surface-2` | `#f1f5f9` | `#1a2238` | Surface secundária (hover, chips) |
| `--surface-glass` | `rgba(255,255,255,0.72)` | `rgba(20,27,46,0.6)` | Cards flutuantes, glass |
| `--border` | `#e2e8f0` | `rgba(255,255,255,0.08)` | Hairlines |
| `--border-strong` | `#cbd5e1` | `rgba(255,255,255,0.16)` | Bordas pronunciadas |

### Texto

| Token | Light | Dark |
|---|---|---|
| `--text` | `#0f172a` | `#f1f5f9` |
| `--text-muted` | `#475569` | `#cbd5e1` |
| `--text-soft` | `#64748b` | `#94a3b8` |
| `--text-invert` | `#ffffff` | `#0f172a` |

### Marca

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--brand` | `#2563eb` | `#38bdf8` | Cor primária (CTAs, links ativos) |
| `--brand-strong` | `#1d4ed8` | `#0ea5e9` | Hover de CTA primário |
| `--brand-soft` | `#dbeafe` | `rgba(56,189,248,0.16)` | Backgrounds suaves de chips |
| `--accent` | `#0ea5e9` | `#60a5fa` | Acento secundário |
| `--accent-2` | `#38bdf8` | `#38bdf8` | Acento ciano consistente |

### Gradients

```css
--gradient-hero: radial-gradient(60% 60% at 50% 30%, rgba(56,189,248,0.18), transparent 70%);
--gradient-cta:  linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);  /* (light) */
--gradient-cta:  linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);  /* (dark) */
--gradient-text: linear-gradient(120deg, #1d4ed8 0%, #0ea5e9 100%);  /* (light) */
--gradient-text: linear-gradient(120deg, #38bdf8 0%, #a78bfa 100%);  /* (dark) */
```

---

## 2 · Tipografia

**Fonte**: `Inter` (Google Fonts), pesos 400/500/600/700.
**Mono** (números técnicos, code-feel): `SFMono-Regular`, `JetBrains Mono`, `Menlo`, `Consolas`.

| Elemento | Tamanho (clamp) | Peso | Tracking |
|---|---|---|---|
| Hero `<h1>` | `clamp(36px, 5.5vw, 64px)` | 700 | `-0.03em` |
| Section `<h2>` (`.lp-h2`) | `clamp(28px, 4vw, 44px)` | 700 | `-0.02em` |
| Card title (`.lp-fn-card__title`) | `17px` | 600 | `-0.015em` |
| Lead (`.lp-lead`) | `clamp(15px, 1.5vw, 18px)` | 400 | normal, line-height 1.6 |
| Card text | `13.5px` | 400 | normal, line-height 1.6 |
| Button | `15-16px` | 600 | normal |
| Eyebrow (`.lp-eyebrow`) | `12px` UPPERCASE | 600 | `0.04em` |
| Numerador mono | `10px` | 600 | `0.14em` |

**Regra de ouro**: títulos grandes têm tracking negativo (apertado),
textos correntes têm line-height 1.6 (aerados).

---

## 3 · Espaçamento & raios

### Raios

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, tags pequenas |
| `--radius-md` | `14px` | Floating cards, chips |
| `--radius-lg` | `22px` | Cards principais, plans |
| `--radius-xl` | `32px` | Blocos hero, CTA final |
| `--radius-pill` | `999px` | Botões, eyebrows, badges |

### Padding padrão de seção

| Breakpoint | Padding vertical |
|---|---|
| Desktop (`>880px`) | `96px 0` |
| Tablet (`880px↓`) | `72px 0` |
| Mobile (`540px↓`) | `56px 0` |

### Container

```css
max-width: 1200px; padding: 0 24px;     /* desktop */
padding: 0 16px;                         /* mobile */
```

---

## 4 · Sombras & glow

```css
--shadow-sm:   0 1px 2px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04);
--shadow-md:   0 8px 24px rgba(15,23,42,0.08);
--shadow-lg:   0 20px 50px rgba(15,23,42,0.12);
--shadow-glow: 0 30px 80px -20px rgba(37,99,235,0.35);
```

**Princípio Resend**: dark mode prefere **hairlines translúcidos** + glows
atmosféricos sobre sombras pesadas. Light mode usa sombras tradicionais.

---

## 5 · Botões

### `.lp-btn` (base)

- `border-radius: 999px` (pill)
- `padding: 14px 22px` (default) / `16px 28px` (`--lg`)
- `font-weight: 600`
- `transition: 220ms cubic-bezier(0.4, 0, 0.2, 1)`

### Variantes

| Classe | Background | Cor texto | Hover |
|---|---|---|---|
| `.lp-btn--primary` | `var(--gradient-cta)` | `#fff` | translateY(-2px) + shadow-glow stronger |
| `.lp-btn--ghost` | `var(--surface)` | `var(--text)` | border vira brand, color brand |
| `.lp-btn--whats` | `#25d366` | `#fff` | `#1ebe5b` + lift |
| `.lp-btn--lg` | (modificador de tamanho) | — | — |

---

## 6 · Cards de função (`.lp-fn-card`)

Padrão de card usado em "Principais Funções". Todos seguem **mesma estrutura**:

```html
<article class="lp-fn-card">
  <span class="lp-fn-card__mark--tl"></span>      <!-- canto CAD top-left -->
  <span class="lp-fn-card__mark--br"></span>      <!-- canto CAD bottom-right -->
  <div class="lp-fn-card__head">                  <!-- live pulse + numerador -->
    <span class="lp-fn-card__live"></span>
    <span class="lp-fn-card__num">01 / 05</span>
  </div>
  <span class="lp-fn-card__scan"></span>          <!-- scan light no hover -->
  <div class="lp-fn-card__icon">...</div>
  <span class="lp-fn-card__divider"></span>       <!-- hairline -->
  <h3 class="lp-fn-card__title">
    Texto <span class="lp-fn-card__hl">palavra-chave</span>
  </h3>
  <p class="lp-fn-card__text">...</p>
</article>
```

### Estilo

- `border-radius: var(--radius-lg)` (22px)
- `padding: 32px 28px`
- `background: var(--surface)` (light) / `rgba(20,27,46,0.5)` + blur (dark)
- `border: 1px solid var(--border)` (hairline)
- `transition: 350ms cubic-bezier(0.34, 1.56, 0.64, 1)` (easing elástico)
- **Stagger reveal**: cada card entra com `var(--i) * 80ms` de delay

### Hover

- `translateY(-6px)` lift
- Border vira `color-mix(var(--ic1) 55%, transparent)`
- Spotlight radial (cor do ícone) aparece no topo
- Marcas CAD crescem `12px → 16px`
- Numerador vira cor do ícone
- Scan light percorre o perímetro (`offset-path: rect()`)
- Highlight underline da palavra-chave expande

---

## 7 · Ícones

**Estilo atual**: **K · Hexagonal Frame** (SVG line, 88×88).

```html
<svg viewBox="0 0 88 88">
  <!-- Hexágono externo (mais sutil) -->
  <polygon points="44,8 76,26 76,62 44,80 12,62 12,26"
           fill="none" stroke="url(#hex-gradient)" stroke-width="1.5" opacity="0.5"/>
  <!-- Hexágono interno -->
  <polygon points="44,18 67,32 67,56 44,70 21,56 21,32"
           fill="none" stroke="url(#hex-gradient)" stroke-width="1.5"/>
  <!-- 6 vertex dots nos cantos -->
  <g fill="var(--ic1)">...</g>
  <!-- Glyph centrado (clock, checklist, team, shield, building) -->
  <g transform="translate(44 44)">...</g>
</svg>
```

### Hover

- SVG inteiro rotaciona `15°`
- Drop-shadow glow intensifica de `6px` pra `12px`

### Variáveis de cor por card

```css
--ic1: #38bdf8;        /* gradient start */
--ic2: #0284c7;        /* gradient end */
--ig:  rgba(14, 165, 233, 0.55);  /* glow rgba */
```

Atualmente **todos os 5 cards usam cyan**. Pra trocar de cor, mudar essas
3 variáveis em `.lp-fn-card` (definição base em `landing.css`).

---

## 8 · Hero cinemático (`.lpc-*`)

Veja [`src/styles/landing-hero-cinematic.css`](../src/styles/landing-hero-cinematic.css).

### Linha do tempo da animação

| Momento | Evento |
|---|---|
| `0ms` | Backdrop tech aparece (gradient escuro + 2 blobs blur cyan/violet) |
| `200ms` | Celular entra: centro do viewport, scale `2.4`, `blur(14px)` |
| `~1100ms` | Blur cai pra 2px, ainda escala alta |
| `~2200ms` | Celular pousa na posição final (direita), nítido |
| `~1700ms` | Backdrop começa a sumir |
| `~2350ms` | Texto da esquerda fade-in |
| `2400-3000ms` | Cards flutuantes entram em cascata (Checklist → Fotos → Relatório → Manutenção) |
| `2400ms+` | Flutuação contínua do celular (loop ~6s) |

Total: **~3,5s** do load até parado.

### Anti-flash

Inline script em [`src/layouts/BaseLayout.astro`](../src/layouts/BaseLayout.astro)
seta `data-theme` ANTES do render baseado em `localStorage` ou
`prefers-color-scheme`. Sem flash de tema errado.

### Reduced motion

`@media (prefers-reduced-motion: reduce)` desativa toda a sequência cinemática
em [`landing-hero-cinematic.css`](../src/styles/landing-hero-cinematic.css).
Tudo aparece já posicionado, sem backdrop.

---

## 9 · Animações & easing

### Easings padrão

```css
/* Smooth padrão (botões, hover de elementos sutis) */
cubic-bezier(0.4, 0, 0.2, 1)

/* Elástico (lift de cards, ícones, sequências cinemáticas) */
cubic-bezier(0.34, 1.56, 0.64, 1)

/* Cinemático (entrada do celular) */
cubic-bezier(0.6, 0.05, 0.2, 1)
```

### Durações

| Tipo | Duração |
|---|---|
| Hover sutil (cor, opacity) | `220ms` |
| Hover transformação (lift, scale) | `350ms` |
| Reveal on scroll | `600-700ms` |
| Entrada cinemática | `1500-2000ms` |
| Flutuação contínua | `5-6s` loop |

### Stagger

Cards de função usam `--i` (índice) para staggered reveal:
`transition-delay: calc(var(--i) * 80ms)`. Live pulse usa
`calc(var(--i) * 0.4s)` pra "respiração" desincronizada.

---

## 10 · Atmosphere & glows

Padrão **Resend**: backgrounds atmosféricos blur (60-80px) ancorados no topo
de seções, sempre com **mask vertical fade-down**:

```css
mask-image: linear-gradient(180deg, #000 0%, #000 40%, transparent 100%);
```

Cores do atmosphere = cor da marca em radial gradient com baixa opacidade
(`0.18` light, `0.22` dark).

---

## 11 · Responsivo

### Breakpoints

```css
1024px  /* Desktop → tablet (grids 4col → 2col) */
880px   /* Hero quebra: 2col → 1col empilhado */
720px   /* Funcoes grid 2col → 1col */
540px   /* Padding e tipografia comprimem */
```

### Princípios

- **Hero**: copy + visual lado-a-lado no desktop, empilhado (visual em cima) no mobile
- **Cards de funções**: 3+2 → 2+2+1 → empilhado
- **Padding seção**: 96px → 72px → 56px
- **Phone mockup**: 280×580 desktop / 240×500 mobile

---

## 11.5 · Header (pill flutuante)

Padrão "floating pill" inspirado no Cleo. Header é **transparente**,
só os pills capturam atenção visual. Layout em **grid 3 colunas**:

```
[ spacer (vazio) ] · [ nav-pill central ] · [ actions: hamburger? + theme ]
```

### Estrutura

| Slot | Conteúdo |
|---|---|
| Esquerda | Vazio (spacer pra balancear o grid) |
| Centro | `.nav-pill` — capsule única com todos os links inline |
| Direita | `.theme-toggle` (sempre) + `.nav-toggle` (só mobile) |

### Pill base (compartilhada)

```css
background: var(--pill-bg);
border: 1px solid var(--pill-border);
border-radius: 999px;
backdrop-filter: blur(20px) saturate(180%);
box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255,255,255,0.04) inset;
```

Variáveis por tema:

| Token | Light | Dark |
|---|---|---|
| `--pill-bg` | `rgba(255,255,255,0.65)` | `rgba(13,19,34,0.55)` |
| `--pill-border` | `rgba(15,23,42,0.08)` | `rgba(255,255,255,0.08)` |
| `--pill-hover` | `rgba(15,23,42,0.06)` | `rgba(255,255,255,0.06)` |
| `--pill-active` | `rgba(15,23,42,0.08)` | `rgba(255,255,255,0.1)` |

### Comportamento do tema

- **SEM** persistência em `localStorage`
- Anti-flash inline em [BaseLayout.astro](../src/layouts/BaseLayout.astro)
  lê **só** `prefers-color-scheme` e seta `data-theme` antes do render
- JS no Header escuta mudanças do SO em tempo real (sunset switch funciona)
- Botão sol/lua só funciona como **override desta sessão** — reload volta pro SO

### Mobile (≤880px)

- Spacer some, grid vira 2 colunas
- Hamburger button aparece
- Nav-pill fica `position: absolute` abaixo do header, visível só com `data-open="true"` no `.site-header`

---

## 12 · Accessibility

- **Focus visible**: cards e CTAs têm outline brand colorido com offset
- **prefers-reduced-motion**: respeitado globalmente em `theme.css`
- **Contrast**: tokens calibrados pra WCAG AA nos dois temas
- **Alt text**: todos os `<img>` têm alt descritivo
- **aria-hidden**: elementos puramente decorativos (marks, scan, glow) marcados

---

## 13 · Onde está o quê

| Camada | Arquivo |
|---|---|
| Tokens base + temas | [src/styles/theme.css](../src/styles/theme.css) |
| Layout global + header/footer | [src/styles/global.css](../src/styles/global.css) |
| Estilos da landing | [src/styles/landing.css](../src/styles/landing.css) |
| Hero cinemático | [src/styles/landing-hero-cinematic.css](../src/styles/landing-hero-cinematic.css) |
| Layout wrapper | [src/layouts/BaseLayout.astro](../src/layouts/BaseLayout.astro) |
| Header (com toggle de tema) | [src/components/layout/Header.astro](../src/components/layout/Header.astro) |
| Footer | [src/components/layout/Footer.astro](../src/components/layout/Footer.astro) |
| Componentes da landing | [src/components/home/landing/](../src/components/home/landing/) |
| Dados (planos, navegação) | [src/data/](../src/data/) |

---

_Última atualização: 2026-05-15. Este doc é mantido pela própria equipe que
edita o site — quando alterar tokens/componentes, atualize a seção correspondente._
