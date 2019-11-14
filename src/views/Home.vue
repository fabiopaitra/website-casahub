<template lang="pug">
  div
    header
      hero
    main
      article
        benefits
        chartsWhat
        chartsHow
        //- certification
        //- socialProof
        //- reciprocity
        companies
        comparison
        urgency
        faq
        //- mainCta
    footer
      mainFooter

</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import hero from '@/components/home/00-hero.vue';
import benefits from '@/components/home/01-benefits.vue';
import chartsWhat from '@/components/home/02-chartsWhat.vue';
import chartsHow from '@/components/home/02-chartsHow.vue';
import reciprocity from '@/components/home/03-reciprocity.vue';
import comparison from '@/components/home/04-comparison.vue';
import companies from '@/components/home/05-companies.vue';
import certification from '@/components/home/06-certification.vue';
import socialProof from '@/components/home/07-socialProof.vue';
import urgency from '@/components/home/09-urgency.vue';
import faq from '@/components/home/10-faq.vue';
import mainCta from '@/components/08-mainCta.vue';
import mainFooter from '@/components/10-mainFooter.vue';

@Component({
  components: {
    hero,
    benefits,
    chartsWhat,
    chartsHow,
    reciprocity,
    comparison,
    companies,
    certification,
    socialProof,
    mainCta,
    urgency,
    faq,
    mainFooter,
  },
})
export default class Home extends Vue {}
</script>
