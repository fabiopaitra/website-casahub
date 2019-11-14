<template <template lang="pug">
section.hero.is-primary.is-bold
  .hero-head
    nav.navbar(role="navigation", aria-label="main navigation")
      .navbar-brand
        router-link.navbar-item(:to="{ name: 'Home' }")
          svg(xmlns="http://www.w3.org/2000/svg", width="44", height="63", viewBox="0 0 44 63")
            text#s_21(data-name="s21", transform="translate(0 30)", fill="#ee2b5c", font-size="39", font-family="Helvetica-Bold, Helvetica", font-weight="700")
              tspan(x="0", y="0") s
              tspan(x="0", y="24") 21
        a.navbar-burger.burger(role="button", aria-label="menu", aria-expanded="false", data-target="navbarBasicExample")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navbarBasicExample.navbar-menu
        .navbar-start
          a.navbar-item
  
  </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeroBanner extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.subtitle {
  color: white;
}
</style>
