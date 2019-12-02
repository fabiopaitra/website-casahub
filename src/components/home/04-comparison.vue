<template lang="pug">
section.section.container.content
  p.is-2.title.has-text-centered.has-text-weight-light Cresça com o plano certo
  p.subtitle.has-text-centered Tudo o que você precisa para gerenciar seus canais e automatizar suas publicações
  .columns.container
    .column
      .table-container
        table.table.is-hoverable.gradient-1
          thead
            tr
              th.has-text-white.padding-1 Recurso
              th.has-text-white.padding-1 Starter
              th.has-text-white.padding-1 Professional
              th.has-text-white.padding-1 Enterprise
          tbody
            tr.has-background-white
              td.padding-1 Preço
              td.padding-1.subtitle.has-text-weight-bold Gratuíto
              td.padding-1.subtitle.has-text-weight-bold R$ 69,90
              td.padding-1.subtitle.has-text-weight-bold R$ 179,90
            tr.has-background-white  
              td.padding-1 Website
              td.padding-1 Sudomínio
              td.padding-1 Domínio Próprio
              td.padding-1 Domínio Próprio
            tr.has-background-white  
              td.padding-1 Layouts 
                span.tag.is-info novo
              td.padding-1 Template padrão
              td.padding-1 Template personalizáveis
              td.padding-1 Layout exclusivos
            tr.has-background-white  
              td.padding-1 Busca de imóveis
              td.padding-1 Busca no casahub.com.br
              td.padding-1 Busca no casahub.com.br
              td.padding-1 Destaque no casahub.com.br
            tr.has-background-white  
              td.padding-1 Uploads
              td.padding-1 5 imóveis
              td.padding-1 30 imóveis
              td.padding-1 200 imóveis
            tr.has-background-white  
              td.padding-1 Dicas de negócio
              td.padding-1 Mercado
              td.padding-1 Mercado, portais
              td.padding-1 Mercado, portais, negócios
            tr.has-background-white
              td.padding-1 Usuários
              td.padding-1 1 usuário
              td.padding-1 2 usuários
              td.padding-1 3 usuários
            tr.has-background-white  
              td.padding-1 Integração com portais
              td.padding-1 Não incluso
              td.padding-1 Integração com portais
              td.padding-1 Integração com portais
            tr.has-background-white  
              td.padding-1 Dados de desempenho
              td.padding-1 Não incluso
              td.padding-1 Não incluso
              td.padding-1 Relatórios de performance
            tr.has-background-white  
              td.padding-1 Anúncio nos portais
              td.padding-1 Não incluso
              td.padding-1 Anúncios nos portais
              td.padding-1 Anúncios nos portais


</template>

<script lang="ts">
export default {
  name: 'comparison',
};
</script>
