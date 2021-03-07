import { createRouter, createWebHashHistory } from 'vue-router'

import Layouts from 'layouts/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layouts,
      children: [
        {
          path: '/', 
          component: () => import('views/home.vue')
        },
      ]
    }
  ]
})

export default router