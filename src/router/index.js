import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/components/Admin.vue'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Products from '@/components/Products.vue'
import Profile from '@/components/Profile.vue'
import SignUp from '@/components/SignUp.vue'
import ViewProducts from '@/components/ViewProducts.vue'
import Orders from '@/components/orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
    },
    {path: '/login',
      component: Login
    },
    {path: '/products',
      component: Products
    },
    {path: '/profile',
      component: Profile
    },
    {path: '/signup',
      component: SignUp
    },
    {path: '/viewproducts',
      component: ViewProducts
    },
    {path: '/orders',
      component: Orders
    },
    {path: '/admin',
      component: Admin
    },
  ],
})

export default router
