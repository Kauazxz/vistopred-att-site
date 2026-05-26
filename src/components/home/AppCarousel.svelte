<script lang="ts">
  import { onMount } from "svelte";

  export let images: { src: string; alt: string }[] = [];
  export let visible = 3;

  // Índice do "slide central" dentro da lista estendida
  let i = 1;

  let transitioning = true;
  let visibleSlides = visible;

  onMount(() => {
    const updateVisible = () => {
      visibleSlides = window.innerWidth <= 700 ? 1 : visible;
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  });

  // Lista estendida: [last, ...images, first]
  $: extended =
    images.length > 1
      ? [images[images.length - 1], ...images, images[0]]
      : images;

  // Quantos "steps" dá pra andar (com loop não precisa travar, mas ajuda pro dots)
  $: realCount = images.length;

  // Centraliza mostrando 3: esquerda = i-1, centro = i, direita = i+1
  // A viewport vai mostrar N "cards", então cada passo desloca 1 card = (100/N)%
  $: slideWidth = 100 / visibleSlides;

  $: trackStyle = `
    transform: translateX(-${(i - 1) * slideWidth}%);
    transition: ${transitioning ? "transform 300ms ease" : "none"};
  `;

  function next() {
    if (extended.length <= 1) return;
    transitioning = true;
    i += 1;
  }

  function prev() {
    if (extended.length <= 1) return;
    transitioning = true;
    i -= 1;
  }

  // Quando a animação termina, se caiu num clone, "teleporta" pro índice real equivalente
  function onTransitionEnd() {
    if (images.length <= 1) return;

    // Se foi para o clone do fim (extended last index = images.length + 1)
    if (i === images.length + 1) {
      transitioning = false;
      i = 1; // volta para a primeira real
    }

    // Se foi para o clone do começo (index 0)
    if (i === 0) {
      transitioning = false;
      i = images.length; // vai para a última real
    }
  }

  // Garante estado inicial correto se mudar a lista de imagens
  $: if (images.length > 1) {
    // i precisa estar entre 1 e images.length
    if (i < 1) i = 1;
    if (i > images.length) i = images.length;
  } else {
    i = 0;
  }

  // Dots: índice real do slide do meio (0..realCount-1)
  $: activeDot = images.length > 1 ? (i - 1 + realCount) % realCount : 0;

  function goToDot(idx: number) {
    if (images.length <= 1) return;
    transitioning = true;
    i = idx + 1; // porque i=1 é o primeiro real
  }

  // Swipe (opcional, mas já deixa bom no mobile)
  let startX = 0;

  function onTouchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
  }

  function onTouchEnd(e: TouchEvent) {
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX;
    if (Math.abs(dx) < 40) return;
    dx > 0 ? prev() : next();
  }
</script>

<div
  class="carousel"
  style={`--visible:${visibleSlides};`}
  on:touchstart={onTouchStart}
  on:touchend={onTouchEnd}
>
  <div class="viewport">
    <button class="nav left" type="button" on:click={prev} aria-label="Anterior">
      <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.5 5.5L9 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <div class="track" style={trackStyle} on:transitionend={onTransitionEnd}>
      {#each extended as img}
        <div class="slide">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      {/each}
    </div>

    <button class="nav right" type="button" on:click={next} aria-label="Próximo">
      <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 5.5L15 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</div>

{#if realCount > 1}
  <div class="dots" aria-label="Indicador de slides">
    {#each Array(realCount) as _, idx}
      <button
        type="button"
        class:active={idx === activeDot}
        on:click={() => goToDot(idx)}
        aria-label={`Ir para slide ${idx + 1}`}
      />
    {/each}
  </div>
{/if}

<style>
  .carousel {
    position: relative;
    border: 1px solid #e6e6e6;
    border-radius: 14px;
    padding: 14px;
    background: #fff;
    --visible: 3;
  }

  .viewport {
    position: relative;
    padding: 0 52px;
    overflow: hidden;
  }

  .track {
    display: flex;
    will-change: transform;
    position: relative;
    z-index: 1;
  }

  .slide {
    flex: 0 0 calc(100% / var(--visible));
    display: grid;
    place-items: center;
    padding: 10px;
  }

  .slide img {
    width: 100%;
    max-width: 220px;
    height: auto;
    display: block;
    border-radius: 14px;
  }

  /* destaque no do meio */
  .slide:nth-child(3n + 2) img {
    transform: scale(1.02);
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, #00b3d7, #2563eb);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 10px 22px rgba(2, 6, 23, 0.2);
    z-index: 2;
  }

  .nav-icon {
    width: 16px;
    height: 16px;
    display: block;
  }

  .nav.left {
    left: 12px;
  }

  .nav.right {
    right: 12px;
  }

  .dots {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 12px;
  }

  .dots button {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    border: none;
    background: #cfd8e3;
    cursor: pointer;
  }

  .dots button.active {
    background: #2563eb;
  }

  /* mobile: mostra 1 por vez automaticamente */
  @media (max-width: 700px) {
    .carousel {
      padding: 12px;
    }

    .viewport {
      padding: 0 44px;
    }

    .slide {
      flex: 0 0 100%;
    }

    .slide img {
      max-width: 240px;
    }

    .slide:nth-child(3n + 2) img {
      transform: none;
    }

    .nav {
      width: 36px;
      height: 36px;
      font-size: 20px;
    }

    .nav.left {
      left: 8px;
    }

    .nav.right {
      right: 8px;
    }

    .dots {
      gap: 10px;
      margin-top: 14px;
    }

    .dots button {
      width: 10px;
      height: 10px;
    }
  }
</style>
