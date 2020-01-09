<template lang="pug">
.content
  form#app(@submit.prevent='addEmail')
    .field.has-addons.is-hidden-mobile
      .control.is-expanded.has-icons-left
        label
          input.input.is-primary(type='email', v-model='email', name='email', placeholder='Inserir meu E-mail')
          span.icon.is-small.is-left
            i.fas.fa-envelope
        p.help.is-danger(v-if='feedback') Email inválido
      .control
        label
          input.button.is-primary(type='submit', value='Participar do beta')
  form(@submit.prevent='addEmail')
    .field.is-hidden-tablet
      .control.is-expanded.has-icons-left
        label
          input.input.is-primary(type='email', v-model='email', placeholder='Inserir meu E-mail')
          span.icon.is-small.is-left
            i.fas.fa-envelope
        .buttons
        input.button.is-primary.is-fullwidth(type='submit', value='Participar do beta')
      p.help.is-danger(v-if='feedback') Email inválido
</template>

<script>
import db from '@/firebase/init';

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-154631400-1');

export default {
  name: 'BaseFormSubmit',
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
            timestamp: Date.now(),
          })
          .then(() => {
            window.dataLayer.push({
              event: 'new_subscriber',
              ecommerce: {
                currencyCode: 'BRL',
                impressions: [
                  {
                    name: 'Beta Users Form',
                    id: Math.random(),
                    price: 10.25,
                    brand: 'Casahub Channel Manager',
                    category: 'Email Subscription',
                    variant: 'Starter Beta',
                    list: 'HomePage',
                    position: 1,
                  },
                ],
              },
            });
            this.$router.push({ name: 'Home' }).catch(err => {
              console.log(err);
              // TODO SEND EVENT TO TAG MANAGER
              // TODO OPEN THANK YOU MODAL
              // TODO CHECK IF USER IS ALREADY SIGN UP
              // TODO CHECK IF EMAIL IS ALREADY REGISTERED
            });
          });
      } else {
        this.feedback = 'Insira seu e-mail';
      }
    },
  },
};
</script>