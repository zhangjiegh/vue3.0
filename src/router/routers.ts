import Main from '@/components/main'
export default [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home')
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: Main,
    children: [
      {
        path: '/table_page',
        name: 'table_page',
        component: () => import('@/pages/table')
      }
    ]
  }
]
