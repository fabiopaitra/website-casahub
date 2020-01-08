<template lang="pug">
.content
  form(@submit.prevent='addEmail')
    .field.has-addons.is-hidden-mobile
      .control.is-expanded.has-icons-left
        label
          input.input.is-primary(type='email', v-model='email' placeholder='Inserir meu E-mail')
          span.icon.is-small.is-left(v-if='!feedback')
            i.fas.fa-envelope
        p.help.is-danger(v-if='feedback') Email inválido
      .control
        label
          input.button.is-primary(type='submit', value='Participar do beta')
  form(@submit.prevent='addEmail')
    .field.is-hidden-tablet
      .control.is-expanded.has-icons-left
        label
          input.input.is-primary(type='email', v-model='email' placeholder='Inserir meu E-mail')
          span.icon.is-small.is-left
            i.fas.fa-envelope
        .buttons
        input.button.is-primary.is-fullwidth(type='submit', value='Participar do beta')
      p.help.is-danger(v-if='feedback') Email inválido
</template>

<script>
import db from '@/firebase/init';

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
          })
          .then(() => {
            this.$router.push({ name: 'Home' }).catch(err => {
              console.log(err);
              //TODO SEND EVENT TO TAG MANAGER AND OPEN MODAL
            });
          });
      } else {
        this.feedback = 'Insira seu e-mail';
      }
    },
  },
};
</script>