<template lang="pug">
section.hero.is-dark.is-bold
  .hero-body.has-text-centered
    .level.container
      .level-left
        p.subtitle.has-text-light {{ headline }}
      .level-right
        nav
          a.button.is-danger.is-fullwidth.is-outlined.is-inverted {{ cta }}
</template>

<script lang="ts">
export default {
  name: 'mainCta',
  data() {
    return {
      headline:
        'Analise o sentimento do cliente e aumente o conhecimento sobre a marca.',
      cta: 'Comece agora',
    };
  },
};
</script>
