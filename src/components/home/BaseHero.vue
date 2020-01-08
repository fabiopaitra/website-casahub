<template lang="pug">
//- .hero.is-dark.is-bold
.hero.has-background.is-dark.has-curve
  img.hero-background(alt="Casahub", src="@/assets/images/bg-home.svg")
  .hero-body.has-text-centered-mobile
    .columns.container.content
      .column.is-two-fifths
        span.tag.is-rounded.is-primary.is-outlined.has-text-weight-bold Casahub 0.1  
          span.has-text-weight-normal(style="margin-left:10px") Ajude a construir seu gerenciador de canais
        h1.title.is-size-3.is-size-4-mobile.is-spaced
          | Utilize a Casahub para gerenciar seus canais de forma integrada e rápida
        h2.subtitle.is-size-5.is-size-6-mobile.has-text-weight-normal.has-text-grey-lighter
          | Reduza seu tempo e investimento. Segurança, alta performance e dados em tempo real na integração dos seus anúncios.
        form(@submit.prevent='addEmail')
          .field.has-addons.is-hidden-mobile
            .control.is-expanded.has-icons-left.has-icon-right
              label
                input.input.is-primary#email-desktop(type='email', name='email' v-model='email' placeholder='Inserir meu E-mail')
                span.icon.is-small.is-left(v-if='!feedback')
                  i.fas.fa-envelope
                span.icon.is-small.is-left(v-if='feedback')
                  i.fas.fa-exclamation-triangle
              p.help.is-danger(v-if='feedback') Email inválido
            .control
              label
                input.button.is-primary(type='submit' value='Participar do beta')
                  //- strong Participar do beta
          .field.is-hidden-tablet
            .control.is-expanded.has-icons-left
              label
                input.input.is-primary#email-mobile(type='email', placeholder='Coloque seu E-mail')
                span.icon.is-small.is-left
                  i.fas.fa-envelope
              .buttons
              a.buttons.button.is-primary.is-centered#submit-email-mobile
                strong Participar do beta
            
        BaseCheckBenefits
      .column.is-hidden-mobile
        picture
          source(type="image/webp" srcset="@/assets/images/casahub-dashboard-publicacao.webp" alt="Web aplicativo Casahub") 
          img(src="@/assets/images/casahub-dashboard-publicacao.png" alt="Web aplicativo Casahub")
  BaseBrands

</template>

<script>
import db from '@/firebase/init';

export default {
  components: {
    BaseBrands,
    BaseCheckBenefits,
  },
  name: 'BaseHero',
  data() {
    return {
      email: null,
      feedback: null,
    };
  },
  methods: {
    addEmail() {
      if (this.email) {
        this.feedback = null;
        db.collection('users-signup-beta')
          .add({
            email: this.email,
          })
          .then(() => {
            this.$router.push({ name: 'Home' }).catch(err => {
              console.log(err);
            });
          });
      } else {
        this.feedback = 'Insira seu e-mail';
      }
    },
  },
};
import BaseBrands from '@/components/home/BaseBrands.vue';
import BaseCheckBenefits from '@/components/home/BaseCheckBenefits.vue';
</script>