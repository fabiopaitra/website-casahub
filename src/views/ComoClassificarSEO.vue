<template lang="pug">
  div
    HeroPost
    BlogSection
    mainFooter

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeroPost from '@/components/HeroPost.vue'; // @ is an alias to /src
import BlogSection from '@/components/BlogSection.vue'; // @ is an alias to /src
import mainFooter from '@/components/10-mainFooter.vue'; // @ is an alias to /src

@Component({
  components: {
    HeroPost,
    BlogSection,
    mainFooter,
  },
})
export default class ComoClassificarSEO extends Vue {}
</script>
