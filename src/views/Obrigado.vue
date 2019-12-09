<template lang="pug">
  //- div
    header
      hero
    //- main
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
import hero from '@/components/home/00-hero.vue';
import brands from '@/components/home/01-brands.vue';
import benefits from '@/components/home/01-benefits.vue';
import chartsHow from '@/components/home/02-chartsHow.vue';
import price from '@/components/home/04-price.vue';
import teamMembers from '@/components/home/06-teamMembers.vue';
import lastCta from '@/components/home/08-lastCta.vue';
import mainFooter from '@/components/10-mainFooter.vue';

@Component({
  components: {
    hero,
  },
})
export default class Home extends Vue {}
</script>
