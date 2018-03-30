import Vue from 'vue'
import Router from 'vue-router'
//import Recommond from '@/components/Recommond/Recommond'
//import Interact from '@/components/interact/interact'
//import Find from '@/components/find/find'
//import Myself from '@/components/myself/myself'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommond'
    },
    {
      path: '/Recommond',
      component: resolve => require(['@/components/Recommond/Recommond'], resolve)
    },
    {
    	path:'/interact',
    	component:resolve => require(['@/components/interact/interact'], resolve)
    },
    {
    	path:'/find',
    	component:resolve => require(['@/components/find/find'], resolve)
    },
    {
    	path:'/myself',
    	component:resolve => require(['@/components/myself/myself'], resolve)
    }
  ]
})
