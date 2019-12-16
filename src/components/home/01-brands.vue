<template lang="pug">
section
  .has-background-grey-lighter.margin-n2
    .columns.container
      .column.is-uppercase
        h2.title.is-5.has-text-centered.has-text-weight-light
          | Integrado com dezenas de plataformas 
    .columns.is-mobile.container.is-vcentered
      .column
        picture
          source(type="image/webp" srcset='@/assets/images/certificados/olx.webp', alt="OLX")
          img(src='@/assets/images/certificados/olx.png', alt='OLX')
      .column
        picture
          source(type="image/webp" srcset='@/assets/images/certificados/imovelweb.webp', alt="Imóvel Web")
          img(src='@/assets/images/certificados/imovelweb.png', alt="Imóvel Web")
      .column
        picture
          source(type="image/webp" srcset='@/assets/images/certificados/vivareal.webp', alt="Viva Real")
          img(src='@/assets/images/certificados/vivareal.png', alt="Viva Real")
      .column
        picture
          source(type="image/webp" srcset='@/assets/images/certificados/zap.webp', alt="Zap Imóveis")
          img(src='@/assets/images/certificados/zap.png', alt="Zap Imóveis")
      .column
        picture
          source(type="image/webp" srcset='@/assets/images/certificados/mercado-livre.webp', alt="Mercado Livre")
          img(src='@/assets/images/certificados/mercado-livre.png', alt="Mercado Livre")
  .section

      
</template>

<script lang="ts">
export default {
  name: 'brands',
};
</script>
