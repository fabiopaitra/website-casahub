import Vue from 'vue';
import VueRouter from 'vue-router';
import Seo from './views/ComoClassificarSEO.vue';
import Home from './views/Home.vue';
import Obrigado from './views/Obrigado.vue';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: { name: 'Home' },
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Agência de Marketing Digital em Curitiba - s21digital',
        metaTags: [
          {
            name: 'description',
            content:
              'Criação e otimização de sites em Curitiba. Marketing Digital com metodologia Growth Hacking especializado em SEO e mídia digital.',
          },
        ],
      },
    },
    {
      path: '/como-classificar-site-primeira-posicao-google',
      name: 'Seo',
      component: Seo,
      meta: {
        title: 'Como classificar em #1 seu site com SEO no Google (2019)',
        metaTags: [
          {
            name: 'description',
            content: 'Tutorial de SEO passo-a-passo avançado de como obter tráfego orgânico',
          },
          {
            property: 'og:description',
            content: 'Como classificar em #1 seu site com SEO no Google (2019)',
          },
        ],
      },
    },
    {
      path: '/obrigado',
      name: 'Obrigado',
      component: Obrigado,
      meta: {
        title: 'Sabe pão quentinho saindo do forno? Então, serão seus leads a partir de agora.',
        metaTags: [
          {
            property: 'description',
            content: 'Já iremos te enviar, espera só nosso consultor criativo parar de dormir que ele já vai montar seu dossiê',
          },
          {
            property: 'og:description',
            content: 'Já iremos te enviar, espera só nosso consultor criativo parar de dormir que ele já vai montar seu dossiê',
          },
        ],
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
Vue.use(VueRouter);

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  /* tslint:disable */
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;