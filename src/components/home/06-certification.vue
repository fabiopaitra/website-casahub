<template lang="pug">
section.section.has-background-light.container.content
  h2.title.is-2.has-text-centered.has-text-weight-light
    | Quem somos
  p
    | Formada por profissional conceituados em suas áreas, a casahub está sempre em busca de soluções para ajudar a desenvolver soluções para o ramo habitacional.
  .tile.is-ancestor
    .tile.is-vertical
      .tile
        .tile.is-parent.is-4
          article.tile.is-child
            .card
              .card-image.is-square.has-text-centered
                img(src="../../assets/images/rafaela-tulio.png", alt="Rafaela Tulio - CEO")
              .card-content.has-text-centered
                p.title.is-4 Rafaela Túlio 
                p.subtitle.is-6 CEO
                .content
                  p Responsável desempenho no direcionamento de campanhas e da equipe de vendas no processo de conversão.
        .tile
        .tile.is-parent.is-4
          article.tile.is-child
            .card
              .card-image.is-square.has-text-centered
                img(src="../../assets/images/fabio-paitra.png", alt="Fabio Paitra - CMO")
              .card-content.has-text-centered
                p.title.is-4 Fabio Paitra
                p.subtitle.is-6 CMO
                .content
                  p Responsável desempenho no direcionamento de campanhas e da equipe de vendas no processo de conversão.
        .tile
        .tile.is-parent.is-4
          article.tile.is-child
            .card
              .card-image.is-square.has-text-centered
                img(src="../../assets/images/elliot-braham.png", alt="Elliot Braham - CTO")
              .card-content.has-text-centered
                p.title.is-4 Elliot Braham
                p.subtitle.is-6 CTO
                .content
                  p Responsável desempenho no direcionamento de campanhas e da equipe de vendas no processo de conversão.

</template>

<script lang="ts">
export default {
  name: 'certification',
};
</script>
