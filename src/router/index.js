// import Vue from 'vue'
// import Router from 'vue-router'
// import demo from './modules/demo'

// Vue.use(Router)

// let routes = [
//   // { path: '/', redirect: '/demo' },
//   // { path: '*', redirect: '/404', hidden: true }
// ]
// console.log(demo, '--')
// const router = new Router({
//   routes: routes.concat(demo)
// })

// export default router

import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
