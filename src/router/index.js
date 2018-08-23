import Vue from 'vue'
import Router from 'vue-router'
import demo from './modules/demo'
import cl from './modules/cl'

Vue.use(Router)

let routes = []
export default new Router({
  routes: routes.concat(demo).concat(cl)
})
