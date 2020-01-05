<template lang="pug">
  div.has-background-light
    header
      hero
    main
      article
        brands
        benefits
        chartsHow
        teamMembers
        price
        lastCta
    //- footer
      mainFooter

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import hero from '@/components/home/BaseHero.vue';
import brands from '@/components/home/BaseBrands.vue';
import benefits from '@/components/home/BaseBenefits.vue';
import chartsHow from '@/components/home/BaseChartsHow.vue';
import price from '@/components/home/BasePrice.vue';
import teamMembers from '@/components/home/BaseTeamMembers.vue';
import lastCta from '@/components/home/BaseLastCta.vue';
import mainFooter from '@/components/BaseMainFooter.vue';

@Component({
  components: {
    hero,
    brands,
    benefits,
    chartsHow,
    teamMembers,
    price,
    lastCta,
    mainFooter,
  },
})
export default class Home extends Vue {}
</script>
