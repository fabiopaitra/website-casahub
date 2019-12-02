<template lang="pug">
section.has-background-grey-lighter.margin-n2
  .columns.container
    .column.is-uppercase
      h2.title.is-3.has-text-centered.has-text-weight-light
        | Integrado com mais de 
        strong 20 plataformas  
  .columns.is-mobile.container.is-vcentered
    .column
      img(src='@/assets/images/certificados/olx.png', alt='Bing Ads')
    .column
      img(src='@/assets/images/certificados/imovelweb.png', alt='Google Partner')
    .column
      img(src='@/assets/images/certificados/vivareal.png', alt='Revendedor Google autorizado')
    .column
      img(src='@/assets/images/certificados/zap.png', alt='Parceiro certificado Google')
    .column
      img(src='@/assets/images/certificados/mercado-livre.png', alt='Facebook expert')
    

      
</template>

<script lang="ts">
export default {
  name: 'brands',
};
</script>
