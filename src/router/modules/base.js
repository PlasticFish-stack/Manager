//主路由
import index from '@/views/index/index.vue'
export default[
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import("@/views/index/template/home")
      }
    ]
  }
  
]