<template <template lang="pug">
aside.section.has-background-light
  .container.content
    .columns
      .column.is-8
        h2.title Descubra seu potencial de crescimento hoje mesmo
        p Utilize técnicas de 
          em growth hacking 
          | e otimize as estratégias de marketing digital. Faça com que a jornada do usuário seja empolgante. Monitore e meça o desempenho de campanhas. Melhore o objetivo, a conversão e o Retorno sobre seu Investimento Digital. 
          | Analise o sentimento do cliente e aumente o conhecimento sobre a marca.
        a(href="https://www.facebook.com/messages/t/s21digital", target="_blank", title="Fale conosco no Facebook messenger").button.is-outlined.is-danger
          span Agende um café
          span.icon
            i.fab.fa-facebook-messenger
      .column
        figure.image.is-16by9
          router-link(:to="{ name: 'Seo' }")
            img(src="@/assets/images/marketing-de-dados.jpg", alt="Nossa missão é tornar você líder")      

</template>

<script lang="ts">
export default {
  name: 'urgency',
};
</script>
