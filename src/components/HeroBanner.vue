<template <template lang="pug">
section.section.container
    .columns
      .column.is-8
        h2.title Começe a crescer hoje mesmo 
        p Otimize as estratégias de marketing digital. Faça com que a jornada do usuário seja empolgante. Monitore e meça o desempenho de campanhas. Melhore o objetivo, a conversão e o ROI. Analise o sentimento do cliente e aumente o conhecimento sobre a marca. 
      .column
        figure.image.is-16by9
          router-link(:to="{ name: 'Seo' }")
            img(src="../assets/images/marketing-de-dados.jpg", alt="Nossa missão é tornar você líder")      

</template>