import { createRouter, createWebHashHistory } from "vue-router";
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: vCatalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    }
  ]
})

export default router