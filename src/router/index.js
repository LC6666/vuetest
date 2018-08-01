import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import InterfaceTest from '@/components/interface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Hello
    },
    {
      path:'/interface',
      name:'interface',
      component:InterfaceTest
    }
  ]
})
