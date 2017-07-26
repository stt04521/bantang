import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/page/Hello'
import classify from  '@/page/classify'
import my from  '@/page/my'
import shoppingCart from  '@/page/shoppingCart'
import container from  '@/page/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container,
      redirect: '/Hello' ,
      children:[
        {
          path: 'Hello',
          component: Hello
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'my',
          component: my
        },
        {
          path: 'shoppingCart',
          component: shoppingCart
        }
      ]
    }
  ]
})
