import jingli from '@/pages/cl/jingli'
import manage from '@/pages/cl/manage'
import home from '@/pages/home'

// require.ensure()

let routes = [
  {
    name: 'cl',
    path: '/cl',
    redirect: '/cl/jingli',
    component: home,
    children: [
      {
        name: 'jingli',
        path: 'jingli',
        component: jingli
      },
      {
        name: 'manage',
        path: 'manage',
        component: manage
      }
    ]
  }
]

export default routes
