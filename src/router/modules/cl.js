import jingli from '@/pages/cl/jingli'
import manage from '@/pages/cl/manage'

let routes = [
  {
    name: 'cl',
    path: '/cl',
    redirect: '/cl/jingli',
    // component: Layout,
    children: [
      {
        name: 'jingli',
        path: '/jingli',
        component: jingli
      },
      {
        name: 'manage',
        path: '/manage',
        component: manage
      }
    ]
  }
]

export default routes
