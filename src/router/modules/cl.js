
// 依赖于共组的组件的写法

// import { ftruncate } from "fs";
// import { resolve } from "dns";

// import jingli from '@/pages/cl/jingli'
// import manage from '@/pages/cl/manage'
import home from '@/pages/home'

// require.ensure()
function getView (viewName, title) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let modules = require(`@/pages/cl/${viewName}`)
      modules.default.options.metaInfo = { title }
      resolve(modules)
    }, reject, 'home')
  }
}

let routes = {
  name: 'cl',
  path: '/cl',
  redirect: '/cl/jingli',
  component: home,
  children: [
    {
      name: 'jingli',
      path: 'jingli',
      // component: jingli
      meta: {
        title: '我是jingli'
      }
    },
    {
      name: 'manage',
      path: 'manage',
      // component: manage
      meta: {
        title: '我是manage'
      }
    }
  ]
}

routes.children.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name, v.meta.title)
  }
})
export default routes
