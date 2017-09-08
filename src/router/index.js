import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Login from '@/components/Login'
import RecentTracks from '@/components/RecentTracks'
import TopAlbums from '@/components/TopAlbums'
import TopArtists from '@/components/TopArtists'
import TopTracks from '@/components/TopTracks'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RecentTracks',
      component: RecentTracks,
      meta: {
        requiresAuth: true
      }
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
    },
    {
      path: '/top-albums',
      name: 'TopAlbums',
      component: TopAlbums,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/top-artists',
      name: 'TopArtists',
      component: TopArtists,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/top-tracks',
      name: 'TopTracks',
      component: TopTracks,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkAuth').then(() => {
      next()
    }).catch(() => {
      next({ path: '/login' })
    })
  }
})

export default router
