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
          source(type="image/webp", src='@/assets/images/certificados/olx.webp', alt='Bing Ads')
          img(src='@/assets/images/certificados/olx.png', alt='Bing Ads')
      .column
        picture
          source(type="image/webp", src='@/assets/images/certificados/imovelweb.webp', alt='Google Partner')
          img(src='@/assets/images/certificados/imovelweb.png', alt='Google Partner')
      .column
        picture
          source(type="image/webp", src='@/assets/images/certificados/vivareal.webp', alt='Revendedor Google autorizado')
          img(src='@/assets/images/certificados/vivareal.png', alt='Revendedor Google autorizado')
      .column
        picture
          source(type="image/webp", src='@/assets/images/certificados/zap.webp', alt='Parceiro certificado Google')
          img(src='@/assets/images/certificados/zap.png', alt='Parceiro certificado Google')
      .column
        picture
          source(type="image/webp", src='@/assets/images/certificados/mercado-livre.webp', alt='Facebook expert')
          img(src='@/assets/images/certificados/mercado-livre.png', alt='Facebook expert')
  .section

      
</template>

<script lang="ts">
export default {
  name: 'brands',
};
</script>
