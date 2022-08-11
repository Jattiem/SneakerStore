import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/allproducts',
    name: 'AllProducts',
    component: function () {
      return import('../views/AllProducts.vue')
    }
  },
  {
    path: '/singleproduct',
    name: 'SingleProduct',
    component: function () {
      return import('../views/Singleproduct.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import('../views/Register.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
