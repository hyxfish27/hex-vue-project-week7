import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    // 後台
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/AdminProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/OrderView.vue')
      }
    ]
  },
  {
    // 使用者
    path: '/user',
    name: 'User',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
