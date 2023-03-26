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
  }
]
