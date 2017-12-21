import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/head'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'head',
    component: head
  }]
})
