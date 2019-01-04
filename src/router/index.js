import Vue from 'vue'
import Router from 'vue-router'
// import demo from './modules/demo'
// import cl from './modules/cl'

// Vue.use(Router)

// let routes = []
// export default new Router({
//   routes: routes.concat(demo).concat(cl)
// })

Vue.use(Router)

const files = require.context('./modules/', true, /\.js$/)
let routes = []
files.keys().forEach(key => {
  routes = routes.concat(files(key).default) // 读取出文件中的default模块
})
export default new Router({
  routes: routes
})
