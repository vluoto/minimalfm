import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import Login from '@/components/Login'
import RecentTracks from '@/components/RecentTracks'
import TopAlbums from '@/components/TopAlbums'
import TopArtists from '@/components/TopArtists'
import TopTracks from '@/components/TopTracks'

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
      path: '/top-albums',
      name: 'TopAlbums',
      component: TopAlbums
    },
    {
      path: '/top-artists',
      name: 'TopArtists',
      component: TopArtists
    },
    {
      path: '/top-tracks',
      name: 'TopTracks',
      component: TopTracks
    }
  ]
})
