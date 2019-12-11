<template lang="pug">
section.section
  
    .columns.is-vcentered
      .column.is-half.is-paddingless
        picture.image.is-16by9
          source(type="image/webp", srcset='../../assets/images/rafaela-tulio.webp 1030w, ../../assets/images/relatorios-consolidados-1030.webp 640w' sizes)
          img(src="../../assets/images/relatorios-consolidados.jpg")

      .column.is-one-third.card.b-corner
        .card-content
          img(src="../../assets/images/relatorios-consolidados-icon.webp", alt="Relatórios consolidados ícone")
          h4.title.is-size-1.has-text-weight-light Relatório consolidado
          p
            strong Entenda a performance 
            | dos seus anúncios em um relatório completo de acordo com as necessidades da sua imobiliária. Entenda a performance dos seus anúncios em um relatório completo de acordo com as necessidades da sua imobiliária.
    section.margin-3
      .columns.is-vcentered
        .column.is-offset-2.one-third.card.t-corner
          .card-content
            img(src="../../assets/images/automacao-anuncios-icon.webp", alt="Automação de anúncios")
            h4.title.is-size-1.has-text-weight-light Automação de anúncios
            p
              strong Entenda a performance 
              | dos seus anúncios em um relatório completo de acordo com as necessidades da sua imobiliária. Entenda a performance dos seus anúncios em um relatório completo de acordo com as necessidades da sua imobiliária.            
        .column.is-half.is-paddingless
          figure.image.is-16by9
            img(src="../../assets/images/automacao-anuncios.webp", alt="Automação de anúncios ícone")
          
          
    
      
</template>

<script lang="ts">
export default {
  name: "chartsHow"
};
</script>
