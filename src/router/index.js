import Vue from 'vue'
import Router from 'vue-router'
import ViewStart from '@/views/ViewStart.vue'
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
      path: '/me',
      name: 'ViewMe',
      component: ViewMe
    }
  ]
})
