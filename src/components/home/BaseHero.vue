<template lang="pug">
//- .hero.is-dark.is-bold
.hero.has-background.is-dark.has-curve
  img.hero-background(alt="Casahub", src="@/assets/images/bg-home.svg")
  .hero-header.has-text-centered-mobile
    .columns.container
      .column.content.section.is-two-fifths
        span.tag.is-rounded.is-primary.is-outlined.has-text-weight-bold Casahub 0.1  
          span.has-text-weight-normal(style="margin-left:10px") Ajude a construir seu gerenciador de canais
        h1.title.is-size-3.is-size-4-mobile.is-spaced
          | Utilize a Casahub para gerenciar seus canais de forma integrada e rápida
        h2.subtitle.is-size-5.is-size-6-mobile.has-text-weight-normal.has-text-grey-lighter
          | Reduza seu tempo e investimento. Segurança, alta performance e dados em tempo real na integração dos seus anúncios.
        .content
          .field.has-addons.is-hidden-mobile
            .control.is-expanded.has-icons-left
              label
                input.input.is-primary.is-medium(type='email', placeholder='Inserir meu E-mail')
                span.icon.is-small.is-left
                  i.fas.fa-envelope
            .control
              a.button.is-primary.is-medium
                strong Participar do beta
          .field.is-hidden-tablet
            .control.is-expanded.has-icons-left
              label
                input.input.is-primary.is-medium(type='email', placeholder='Coloque seu E-mail')
                span.icon.is-small.is-left
                  i.fas.fa-envelope
              .buttons
              a.buttons.button.is-primary.is-medium.is-centered
                strong Participar do beta
            
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
  },
  name: 'hero',
  props: {
    variant: {
      type: String,
      optional: true,
      default: 'primary',
    },
    icon: {
      type: String,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    thirdOptionItems: {
      type: Array,
      default: () => [],
    },
    secondOptionButton: {
      type: Object,
      default: () => ({}),
    },
    hubspotFormId: {
      type: String,
      default: '03cde20b-a4ae-47b5-a8bf-085497cd349d',
    },
    submitButtonClass: {
      type: String,
      default: 'button is-danger is-fullwidth is-outlined is-inverted',
    },
    hubspotPortalId: {
      type: String,
      default: '5403699',
    },
    hubspotFormOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.$nextTick(() => {
      // Documentation: https://developers.hubspot.com/docs/methods/forms/advanced_form_options
      const options = {
        portalId: this.hubspotPortalId,
        target: `#hubspot-form-${this.hubspotFormId}`,
        formId: this.hubspotFormId,
        formInstanceId: new Date().getTime(),
        cssClass: 'form-group',
        // submitButtonClass: this.submitButtonClass,
        ...this.hubspotFormOptions,
      };

      // Prepare GTM
      window.dataLayer = window.dataLayer || [];

      window.hbspt.forms.create({
        ...options,
        onBeforeFormInit: () => {
          this.$emit('onBeforeFormInit', options);

          // Fire GTM
          window.dataLayer.push({
            event: 'forms-on-before-submit',
          });
        },
        onFormReady: () => {
          this.$emit('onFormReady', options);

          // Fire GTM
          window.dataLayer.push({
            event: 'forms-on-form-ready',
          });
        },
        onFormSubmit: () => {
          this.$emit('onFormSubmit', options);

          // Fire GTM
          window.dataLayer.push({
            event: 'forms-on-form-submit',
          });
        },
      });
    });
  },
};

import BaseBrands from '@/components/home/BaseBrands.vue';
import BaseCheckBenefits from '@/components/home/BaseCheckBenefits.vue';
</script>

<style lang="scss" scoped>
</style>