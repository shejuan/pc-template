function getView (viewName, title) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let modules = require(`@/pages/${viewName}`)
      modules.default.options.metaInfo = { title }
      resolve(modules)
    }, reject, 'home')
  }
}

let routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '我是demo'
    }
  }
]

routes.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name, v.meta.title)
  }
})
export default routes
