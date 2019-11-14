<template lang="pug">
section.section.has-background-light
  h2.title.is-2.has-text-centered
    | Growth Hacking faz a sua empresa 
    span.gradient alavancar 
    | como uma 
    em startup
  .content
    p
    | Canais tradicionais de marketing como jornal, televisão, revista, etc., estão saturados e caros. Empresas têm recursos limitados, elas precisam ser criativas em relação a adquirir novos usuários e retê-los e assim, gerar crescimento. Utilizamos a metodologia de 
    strong
      em ScoreCard 
    | focado em definir as prioridades e conseguir o maior resultado em um curto espaço de tempo.
    p
    | Nossos serviços ajudam sua empresa a crescer agora. Porque o que é bom para a empresa, também deve ser bom para o cliente.
  .tile.is-ancestor
    .tile.is-vertical
      .tile
        .tile.is-parent.is-4
          article.tile.is-child
            .card
              .card-image
                figure.image.is-5by4
                  router-link(:to="{ name: 'Seo' }")
                    img(src="../../assets/images/atracao.png", alt="Growth Hacking para atrair mais usuários")
              .card-content
                h3.subtitle.is-6.has-text-primary AQUISIÇÃO
                p.title.is-4
                  router-link(:to="{ name: 'Seo' }") Otimize investimentos e torne-se líder de mercado 
                .content
                  | Utilize técnicas de 
                  em Growth Hacking 
                  | para alcançar mais 
                  em leads
                  |, acompanhando as tendências do mercado e a resposta dos clientes. Amplifique canais de aquisição criando conteúdos atraentes e anúncios eficazes. Impulsione o 
                  em ROI 
                  | de marketing digital graças à um melhor desempenho no direcionamento de campanhas e da equipe de vendas no processo de conversão.
        .tile
        .tile.is-parent.is-4
          article.tile.is-child
            .card
              .card-image
                figure.image.is-5by4
                  router-link(:to="{ name: 'Seo' }")
                    img(src="../../assets/images/ativacao.png", alt="Faça experimentos de Growth Marketing para validar seu produto")
              .card-content
                h3.subtitle.is-6.has-text-primary RETENÇÃO
                p.title.is-4
                  router-link(:to="{ name: 'Seo' }") Faça a jornada do usuário empolgante
                .content
                  | Entenda em tempo real como está a satisfação e jornada dos seus clientes. Receba orientação em relação a implantação de melhorias e valide suas estratégias em 
                  em Customer Success.
                  | Tornar suas vendas previsíveis, sem taxa de evasão e seus clientes satisfeitos são as nossas metas. Defina o modelo de atribuição multicanal e automatize seu marketing digital com leadscore preditivo. 
        .tile
        .tile.is-parent.is-4
          article.tile.is-child
            .card
              .card-image
                figure.image.is-5by4
                  router-link(:to="{ name: 'Seo' }")
                    img(src="../../assets/images/retencao.png", alt="Realize Cross selling e upsell para aumentar seu faturamento")
              .card-content
                h3.subtitle.is-6.has-text-primary AMPLIAÇÃO
                p.title.is-4
                  router-link(:to="{ name: 'Seo' }") Prepare-se para expandir sua receita
                .content
                  | Capacite sua equipe sobre a perspectiva de análise de dados afim de oferecer à seus usuários mais soluções e aumentar o engajamento de consumidores. Aprenda como utilizar 
                  em KPIs 
                  | a seu favor e crie automações que possibilitem a ampliação de suas vendas através de uma base de usuários já fidelizados. Implemente a cultura 
                  em Customer Centric 
                  | validando os direcionamentos obtidos.

</template>

<script lang="ts">
export default {
  name: 'benefits',
};
</script>
