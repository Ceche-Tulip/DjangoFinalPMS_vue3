import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '主页',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('../views/index/index.vue')
      },
      {
        path: '/sys/user',
        name: '用户管理',
        component: () => import('../views/sys/user/index.vue')
      },
      {
        path: '/sys/role',
        name: '角色管理',
        component: () => import('../views/sys/role/index.vue')
      },
      {
        path: '/sys/menu',
        name: '菜单管理',
        component: () => import('../views/sys/menu/index.vue')
      },
      {
        path: '/bsns/department',
        name: '部门管理',
        component: () => import('../views/bsns/Department')
      },
      {
        path: '/bsns/post',
        name: '岗位管理',
        component: () => import('../views/bsns/Post')
      },
      {
        path: '/userCenter',
        name: '个人中心',
        component: () => import('../views/userCenter/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

function isLoggedIn() {
  return sessionStorage.getItem('currentUser') !== null
}

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!isLoggedIn()) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router