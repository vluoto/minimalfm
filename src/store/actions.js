import request from 'superagent'

import * as types from './mutation-types'
import { restoreSession, storeSession } from '@/utils/auth'

export default {
  async getSession ({ commit }, token) {
    return new Promise(async (resolve, reject) => {
      const { body: { session } } = await request
        .get('/api/session')
        .query({ token })

      if (session) {
        commit(types.UPDATE_SESSION, session)
        storeSession(session).finally(resolve)
      } else {
        reject()
      }
    })
  },
  async getRecentTracks ({ commit }, params = {}) {
    const { body: { recenttracks: { track: recentTracks } } } = await request
      .get('/api/recent-tracks')
      .query(params)

    commit(types.UPDATE_RECENT_TRACKS, recentTracks)
  },
  async getTopAlbums ({ commit }, params = {}) {
    const { body: { topalbums: { album: topAlbums } } } = await request
      .get('/api/top-albums')
      .query(params)

    commit(types.UPDATE_TOP_ALBUMS, topAlbums)
  },
  async getTopArtists ({ commit }, params = {}) {
    const { body: { topartists: { artist: topArtists } } } = await request
      .get('/api/top-artists')
      .query(params)

    commit(types.UPDATE_TOP_ARTISTS, topArtists)
  },
  async getTopTracks ({ commit }, params = {}) {
    const { body: { toptracks: { track: topTracks } } } = await request
      .get('/api/top-tracks')
      .query(params)

    commit(types.UPDATE_TOP_TRACKS, topTracks)
  },
  async getUserInfo ({ commit }, user) {
    const { body: { user: userInfo } } = await request
      .get('/api/user-info')
      .query({ user })

    commit(types.UPDATE_USER_INFO, userInfo)
  },
  async loveTrack ({ commit, state }, track) {
    try {
      await request
        .post('/api/love-track')
        .set('session-id', state.session.key)
        .send(track)

      commit(types.LOVE_TRACK, track)
    } catch (err) {
      console.error(err)
    }
  },
  async restoreSession ({ commit }) {
    const session = await restoreSession()

    commit(types.UPDATE_SESSION, session)
  },
  async unloveTrack ({ commit, state }, track) {
    try {
      await request
        .post('/api/unlove-track')
        .set('session-id', state.session.key)
        .send(track)

      commit(types.UNLOVE_TRACK, track)
    } catch (err) {
      console.error(err)
    }
  }
}
