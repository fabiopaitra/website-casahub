<template lang="pug">
section.section.has-background-black-bis
  h2.title.is-2.has-text-centered.has-text-light O que fizemos
  .container.content
    p.has-text-light
      | Ao desenvolver uma campanha, é importante que as metas sejam claras. Mensurar cada etapa com controle para chegar ao resultado sem surpresas negativas. Esta é a metodologia aplicada pela s21. Com essa premissa, propomos aos nossos clientes, trabalhar com o modelo de 
      strong
        em.has-text-light Success Fee
      | , onde ganhamos com o sucesso das metas atingidas.
  .tile.is-ancestor
    .tile.is-vertical
      .tile
        .tile.is-parent.is-6
          article.tile.is-child
            .card.has-background-black-ter
              .card-image
                figure.image.is-4by5
                  img(src="@/assets/images/mandela-longa-caminhada-liberdade-s21digital.jpg", alt="Capa Longa Caminhada até a Liberdade - Nelson Mandela - Prefácio Fernando Henrique Cardoso")
              .card-content
                h4.title.is-4.has-text-light Editora Nossa Cultura
                .content.has-text-light
                  p
                  | Mais de 20 capas, sendo vitrine nas maiores livrarias do Brasil, desenvolvidas durante 2 anos. 
      
        .tile.is-parent.is-vertical.is-3
          article.tile.is-child
            .card.has-background-black-ter
              .card-image
                figure.image.is-3by1
                  img(src="@/assets/images/abemd-curso-marketing-dados-s21digital.jpg", alt="Placeholder image")
              .card-content
                h4.title.is-4.has-text-light Associação Brasileira de Marketing de Dados
                .content.has-text-light
                  p
                  | Hotsite como foco em apresentar e captar alunos para o curso de Marketing de Dados oferecido pela Abemd em São Paulo durante 2017. 
          article.tile.is-child
            .card.has-background-black-ter
              .card-image
                figure.image.is-3by1
                  img(src="@/assets/images/hsbc-emailmkt-advance-s21digital.jpg", alt="HSBC Bank Brasil - Campanhas de E-mail Marketing")
              .card-content
                h4.title.is-4.has-text-light HSBC Bank Brasil
                .content.has-text-light
                  p
                  | Desenvolvimento do HTML para e-mail marketing com os padrões de segurança e qualidade de código exigidos pelo HSBC Brasil. 
          article.tile.is-child
            .card.has-background-black-ter
              .card-image
                figure.image.is-square
                  img(src="@/assets/images/inovaBra-bradesco-habitat-s21digital.jpg", alt="Plataforma de Inovação Bradesco - InovaBra Habitat")
              .card-content
                h4.title.is-4.has-text-light InovaBra - Bradesco
                .content.has-text-light
                  p
                  | Landing Page em VueJS com objetivo de apresentar o Book de Startups aceleradas pelo InovaBra do Bradesco
        .tile.is-parent.is-vertical.is-3
          article.tile.is-child
            .card.has-background-black-ter
              .card-image
                figure.image.is-square.overflow
                  img#room(src="@/assets/images/avon-programa-eva-s21digital.jpg", alt="Eva, Programa de Relacionamento Avon para revendedoras")
              .card-content
                h4.title.is-4.has-text-light Avon Brasil
                .content.has-text-light
                  p
                  | E-mail Marketing para EVA, o programa de relacionamento da Avon Brasil. 
          article.tile.is-child
            .card.has-background-black-ter
              .card-image
                figure.image.is-4by5
                  img(src="@/assets/images/educationlink-seo-ads-s21digital.jpg", alt="EducationLink SEO e Mídia")
              .card-content
                h4.title.is-4.has-text-light EducationLink
                .content.has-text-light
                  p
                  | Nosso objetivo era validar e escalar. Em 3 meses, implantamos o modelo de Leadscoring com aumento de 5x a ˜ão de novos clientes. Em SEO, foi possível chegar a primeira posição nos principais termos para o negócio. Google e Facebook Ads entraram como suporte nos 7 touchpoints projetados para atender a fluxo de decisão da startup.

            
</template>

<script lang="ts">
export default {
  name: 'companies',
};
</script>
