// 通用路由：声明通用路由
// 处理路由的正常登录，以及乜有权限,404、403等类的问题

export default [
  // 默认页面
  {
    path: '/',
    redirect: '/index',
    hidden: true
  },
  // 无权限页面
  {
    path: '/nopermission',
    name: 'noPermission',
    component: () => import('@/pages/noPermission')
  },
  // 404
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/pages/notFound')
  }
]
