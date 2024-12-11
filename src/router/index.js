import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')  // 配置登陆的路由
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
