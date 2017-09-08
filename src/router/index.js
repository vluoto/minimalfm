import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Login from '@/components/Login'
import RecentTracks from '@/components/RecentTracks'
import TopAlbums from '@/components/TopAlbums'
import TopArtists from '@/components/TopArtists'
import TopTracks from '@/components/TopTracks'
import { restoreSession } from '@/utils/auth'
import store from '@/store'
import * as types from '@/store/mutation-types'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  restoreSession().then((session) => {
    store.commit(types.UPDATE_SESSION, session)
    next()
  }).catch(() => {
    next('/login')
  })
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RecentTracks',
      component: RecentTracks,
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
    },
    {
      path: '/top-albums',
      name: 'TopAlbums',
      component: TopAlbums,
      beforeEnter: requireAuth
    },
    {
      path: '/top-artists',
      name: 'TopArtists',
      component: TopArtists,
      beforeEnter: requireAuth
    },
    {
      path: '/top-tracks',
      name: 'TopTracks',
      component: TopTracks,
      beforeEnter: requireAuth
    }
  ]
})

export default router
