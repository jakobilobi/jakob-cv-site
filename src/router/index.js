import Vue from 'vue'
import Router from 'vue-router'
import ViewStart from '@/views/ViewStart.vue'
import ViewApps from '@/views/ViewApps.vue'
import ViewMe from '@/views/ViewMe.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewStart',
      component: ViewStart
    },
    {
      path: '/apps',
      name: 'ViewApps',
      component: ViewApps
    },
    {
      path: '/me',
      name: 'ViewMe',
      component: ViewMe
    }
  ]
})
