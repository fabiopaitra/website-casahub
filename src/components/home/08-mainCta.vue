/<template lang="pug">
  h2 {{ headline }}
  p {{ subHead }}
</template>

<script lang="ts">
export default {
  name: 'mainCta',
  data() {
    return {
      headline: 'Vamos manter contato',
      // tslint:disable-next-line:max-line-length
      subHead:
        'Todos os nossos conteúdos recentes para profissionais de email marketing entregues na sua caixa de entrada algumas vezes por mês',
    };
  },
};
</script>