import Vue from 'vue';
import Router from 'vue-router';
import Seo from './views/ComoClassificarSEO.vue';
import Home from './views/Home.vue';

Vue.use(Router);
/* tslint:disable */
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Marketing digital para liderar com dados | s21digital',
      metaTags: [
        {
          name: 'description',
          content: 'Marketing digital, ferramentas, mídia de performance e análise de dados para alancar o tráfego do seu site.'
        },
        // {
        //   property: 'og:description',
        //   content: 'OG da primeira pagina'
        // }
      ]
    },
  },
  {
    path: '/como-classificar-site-primeira-posicao-google',
    name: 'Seo',
    Component: Seo,
    meta: {
      title: 'Como classificar em #1 seu site com SEO no Google (2019)',
      metaTags: [
        {
          name: 'description',
          content: 'Tutorial de SEO passo-a-passo avançado de como obter mais tráfego orgânico'
        },
        {
          property: 'og:description',
          content: 'Como classificar em #1 seu site com SEO no Google (2019)'
        }
      ]
    },
    component: () => import('./views/ComoClassificarSEO.vue'),
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});


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