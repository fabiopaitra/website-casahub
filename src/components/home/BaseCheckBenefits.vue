<template lang="pug">
.columns.is-small.is-hidden-mobile(style="margin-top:10px")
  .column.is-narrow.is-paddingless(style="margin-left:10px")
    p
      span.icon.has-text-success
        i.far.fa-check-circle
      | Teste 30 dias 
  .column.is-narrow.is-paddingless(style="margin-left:10px")
    p
      span.icon.has-text-success
        i.far.fa-check-circle
      | Treinamento
  .column.is-narrow.is-paddingless(style="margin-left:10px")
    p
      span.icon.has-text-success
        i.far.fa-check-circle
      | Configuração rápida 

      
</template>

<script lang="ts">
export default {
  name: 'BaseCheckBenefits',
};
</script>
