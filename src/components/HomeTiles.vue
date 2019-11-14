<template lang="pug">
section.section.has-background-light
  header
    .tile.is-ancestor
      .tile.is-vertical
        .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/atracao.png", alt="Atrair novos usuários")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light AQUISIÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Tornar você líder é nossa missão
                  .content
                    | Alinhe as estratégias para analisar as evoluções do mercado, o sentimento do cliente e as tendências. Impulsione o ROI de marketing graças a um melhor desempenho no direcionamento de campanhas.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/ativacao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light ATIVAÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Prepare-se para conquistar seu espaço na era digital
                  .content
                    | Amplifique seus canais de aquisição criando conteúdo atraente e anúncios eficazes com insights orientados por dados.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/retencao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light RETENÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Faça a jornada do cliente empolgante
                  .content
                    | Seja pioneiro diariamente com uma análise  de ponta a ponta criada para transformar toda a sua startup.
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HomeTiles extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
