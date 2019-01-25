// /不依赖组件/
function getView (viewName, title) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let modules = require(`@/pages/shouye/${viewName}`)
      modules.default.options.metaInfo = { title }
      resolve(modules)
    }, reject, 'home')
  }
}

let routes = [
  {
    name: 'e-chart',
    path: '/shouye/e-chart',
    meta: {
      title: '图表'
    }
  }
]


routes.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name, v.meta.title)
  }
})
export default routes
