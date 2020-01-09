<template lang="pug">
section.hero.is-fullheight.is-light
  .columns.is-marginless
    .column.is-fullheight.hero.is-link.is-bold.is-one-third
      .columns.section.is-centered
        .column.is-half
          router-link.navbar-item(:to="{ name: 'Home' }")
            img(src='@/assets/images/casahub-simbolo-negativo.svg', style="padding-right:10px")
            img(src='@/assets/images/casahub-logotipo-negativo.svg')
      .columns.hero-body
        .column.section.has-text-white.has-text-centered
          h1.subtitle.is-4 A Casahub vai ajudar milhares de imobiliárias fazer uma 
            strong.has-text-white melhor gestão dos canais 
            | todos os anos.
    .column
      .hero-head.columns
        .column.navbar
          .navbar-end
            p.navbar-item Já possui conta?
            span.navbar-item
              a.button.is-link.is-outlined
                span.icon
                  i.fa.fa-sign-in
                span Entrar

      .hero-body
        .columns.section
          .column.is-8.is-offset-2
            h2.title.is-4 Cria sua conta gratuita
            h3.subtitle.is-6 Gratuito para sempre. Sem necessidade de cartão de crédito.
            .content
              form(@submit.prevent='addEmail')
                .field.content
                  label.label Nome *
                  .control.has-icons-left
                    input.input.is-info(type='text', placeholder='João ')
                    span.icon.is-small.is-left
                      i.fas.fa-user
                .field.content
                  label.label Sobrenome *
                  .control.has-icons-left
                    input.input.is-info(type='text', placeholder='Tribiane da Silva')
                    span.icon.is-small.is-left
                      i.fas.fa-user
                .field.content
                  label.label E-mail *
                  .control.has-icons-left
                    input.input.is-info(type='email', placeholder='Inserir meu E-mail')
                    span.icon.is-small.is-left
                      i.fas.fa-envelope
                .field  
                  .buttons.control
                  input.button.is-primary.is-fullwidth(type='submit', value='Participar do beta')
                p.help.is-danger Email inválido
                p.help Ao criar uma conta do Casahub, você concorda em aceitar os termos de serviço do cliente da Casahub.
                hr
                p.help Estamos comprometidos com sua privacidade. A Hubspot usa as informações que você nos fornece para contatá-lo com relação aos nossos conteúdos, produtos e serviços relevantes. Você pode cancelar a assinatura dessas comunicações quando quiser. Para mais informações, confira nosso Política de privacidade.




</template>

<script>
export default {
  name: 'BaseSignUp',
  data() {},
};
</script>