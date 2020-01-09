<template lang="pug">
.hero.has-background.is-dark.has-curve
  img.hero-background(alt="Casahub", src="@/assets/images/bg-home.svg")
  .hero-body.has-text-centered-mobile
    .columns.container.content
      .column.is-two-fifths
        span.tag.is-rounded.is-primary.is-outlined.has-text-weight-bold Casahub 0.1  
          span.has-text-weight-normal(style="margin-left:10px") Ajude a construir seu gerenciador de canais
        h1.title.is-size-3.is-size-4-mobile.is-spaced
          | Utilize a Casahub para gerenciar seus canais de forma integrada e rápida
        h2.subtitle.is-size-5.is-size-6-mobile.has-text-weight-normal.has-text-grey-lighter
          | Reduza seu tempo e investimento. Segurança, alta performance e dados em tempo real na integração dos seus anúncios.
        BaseFormSubmit      
        BaseCheckBenefits
      .column.is-hidden-mobile
        picture
          source(type="image/webp" srcset="@/assets/images/casahub-dashboard-publicacao.webp" alt="Web aplicativo Casahub") 
          img(src="@/assets/images/casahub-dashboard-publicacao.png" alt="Web aplicativo Casahub")
  BaseBrands

</template>

<script>
export default {
  components: {
    BaseBrands,
    BaseCheckBenefits,
    BaseFormSubmit,
  },
  name: 'BaseHero',
  props: {
    email: null,
    feedback: null,
  },
};
import BaseBrands from '@/components/home/BaseBrands.vue';
import BaseCheckBenefits from '@/components/home/BaseCheckBenefits.vue';
import BaseFormSubmit from '@/components/BaseFormSubmit.vue';
</script>