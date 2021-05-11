import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
