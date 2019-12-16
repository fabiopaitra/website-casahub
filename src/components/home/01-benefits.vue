<template lang="pug">
section.section.container.content
  h2.title.is-2.is-spaced.has-text-centered.has-text-weight-light
    | Rápido. Simples. Seguro.
  p.subtitle.has-text-centered O Casahub é a plataforma que sua equipe está solicitando - é a plataforma que os corretores precisam, construído com a tecnologia que os desenvolvedores preferem e integra com todas as suas outras ferramentas.
    .columns
      .column
        .columns.is-mobile
          .column.is-one-third-mobile
            figure
              source(type="image/webp" srcset="../../assets/images/anuncie-nos-principais-portais.webp", alt="Anuncie nos principais portais")
              img(src="../../assets/images/anuncie-nos-principais-portais.jpg", alt="Anuncie nos principais portais")
          .column
            h3.title.is-4.has-text-weight-light
              | Anuncie nos principais portais
            p
              | Nossa solução fornece um conjunto completo e integrado com os principais marketplaces de venda e aluguel de imóveis do Brasil e do mundo.
        .columns.is-mobile
          .column.is-one-third-mobile
            figure
              source(type="image/webp" srcset="../../assets/images/dicas-desempenho.webp", alt="Dicas de desempenho")
              img(src="../../assets/images/dicas-desempenho.jpg", alt="Dicas de desempenho")
          .column
            h3.title.is-4.has-text-weight-light
              | Receba dicas de desempenho
            p
              | Nossa solução fornece um conjunto completo e integrado com os principais marketplaces de venda e aluguel de imóveis do Brasil e do mundo.
      .column
        .columns.is-mobile
          .column.is-one-third-mobile
            figure
              source(type="image/webp" srcset="../../assets/images/acompanhe-performance.webp", alt="Acompanhe a performance")
              img(src="../../assets/images/acompanhe-performance.jpg", alt="Acompanhe a performance")
          .column
            h3.title.is-4.has-text-weight-light
              | Acompanhe a performance
            p
              | Nossa solução fornece um conjunto completo e integrado com os principais marketplaces de venda e aluguel de imóveis do Brasil e do mundo.
        .columns.is-mobile
          .column.is-one-third-mobile
            figure
              source(type="image/webp" srcset="../../assets/images/direcione-divulgacao.webp", alt="Direcione a divulgação")
              img(src="../../assets/images/direcione-divulgacao.jpg", alt="Direcione a divulgação")
          .column
            h3.title.is-4.has-text-weight-light
              | Direcione a divulgação
            p
              | Feito para imobiliárias que constroem o futuro dos imóveis

</template>

<script lang="ts">
export default {
  name: 'benefits',
};
</script>
