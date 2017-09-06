import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Login from '@/components/Login'
import RecentTracks from '@/components/RecentTracks'
import TopArtists from '@/components/TopArtists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RecentTracks',
      component: RecentTracks
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
      path: '/top-artists',
      name: 'TopArtists',
      component: TopArtists
    }
  ]
})
