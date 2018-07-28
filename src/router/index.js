import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import store from '@/store'

Vue.use(Router)

export const requireAuth = async (to, from, next) => {
  try {
    await store.dispatch('restoreSession')
    next()
  } catch (err) {
    next('/login')
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ],
  // FIXME: Does not get triggered on app load.
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})

export default router
