<template lang="pug">
section.hero.gradient-2.is-bold.has-background-overflow
  .hero-body.z-5
    .columns.container.content.has-text-centered
      .column.is-half.margin-n4
        .box.content.has-background-white
          h6.title.is-3.has-text-dark Comece a testar hoje mesmo o Casahub.
          p Acesse gratuitamente durante o beta e nos envie feedbacks de como nossa casa pode facilitar a divulgação das suas. 
            em Porquê mi casa és su casa.
          .field
            .control.is-expanded.has-icons-left
              input.input.is-primary.is-medium(type='email', placeholder='Coloque seu E-mail')
              span.icon.is-small.is-left
                i.fas.fa-envelope
              .buttons
              a.buttons.button.is-primary.is-medium.is-centered
                strong Quero participar do beta
        .columns.is-centered.is-mobile
          .column.content.is-small.is-narrow
            p.has-text-white
              span.icon.has-text-success
                i.far.fa-check-circle
              | Teste 14 dias
          .column.content.is-small.is-narrow
            p.has-text-white
              span.icon.has-text-success
                i.far.fa-check-circle
              | Fase beta de desenvolvimento
          .column.content.is-small.is-narrow
            p.has-text-white
              span.icon.has-text-success
                i.far.fa-check-circle
              | Configuração rápida
  .hero-footer
     figure.image
      img.hero-background.b-0(alt="", src="../../assets/images/grafico-lancamento.svg")

</template>

<script lang="ts">
export default {
  name: 'mainCta',
  data() {
    return {
      headline: 'Analise o sentimento do cliente e aumente o conhecimento sobre a marca.',
      cta: 'Comece agora',
    };
  },
};
</script>
