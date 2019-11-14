<template <template lang="pug">
header.hero.is-primary.is-bold.is-fullheight
  .hero-head
    nav.navbar(role="navigation", aria-label="main navigation")
      .navbar-brand
        router-link.navbar-item(:to="{ name: 'Home' }")
          svg(xmlns="http://www.w3.org/2000/svg", width="44", height="63", viewBox="0 0 44 63")
            text#s_21(data-name="s21", transform="translate(0 30)", fill="#ee2b5c", font-size="39", font-family="Helvetica-Bold, Helvetica", font-weight="700")
              tspan(x="0", y="0") s
              tspan(x="0", y="24") 21
        a.navbar-burger(role='button', data-target='navMenu', aria-label='menu', aria-expanded='false')
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navMenu.navbar-menu
        .navbar-end.container
          a.navbar-item Aquisição
          a.navbar-item Ativação
          a.navbar-item Retenção
  .hero-body
    .container
      h2.title.is-size-1.is-spaced
        | Lidere com 
        span.has-text-danger dados
      h1.subtitle
        | Melhore o objetivo, a conversão e o ROI. Analise o sentimento do cliente e aumente o conhecimento sobre a marca.
      .level
        .item-level(:id="`hubspot-form-${hubspotFormId}`")


  </template>

<script>
export default {
  name: 'ContactForm',
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
</script>

<style lang="scss" scoped>
.subtitle {
  color: white;
}
</style>