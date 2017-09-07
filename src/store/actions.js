import localforage from 'localforage'

import * as mutations from './mutation-types'
import withQuery from '@/utils/with-query'
import sign from '@/utils/sign'

const defaultParams = {
  api_key: process.env.LASTFM_API_KEY,
  format: 'json'
}

function q (query, fetchOptions = {}) {
  return fetch(withQuery(process.env.LASTFM_API_URL, query), fetchOptions).then(response => {
    return response.json()
  })
}

const saveSession = (session) => {
  return localforage.setItem(
    'session',
    session
  ).then(value => {
    return value
  }).catch(err => {
    console.error(err)
  })
}

const loadSession = (session) => {
  return localforage.getItem(
    'session'
  ).then(value => {
    return value
  })
}

export default {
  authenticate ({ commit }, token) {
    const params = {
      api_key: defaultParams.api_key,
      method: 'auth.getSession',
      token
    }

    const query = Object.assign({}, defaultParams, params, {
      api_sig: sign(params)
    })

    return new Promise((resolve, reject) => {
      q(query).then(({ session }) => {
        if (session) {
          commit(mutations.UPDATE_SESSION, session)
          saveSession(session)
          resolve()
        } else {
          reject()
        }
      })
    })
  },
  checkAuth ({ commit }, state) {
    return new Promise((resolve, reject) => {
      loadSession().then(session => {
        if (session) {
          commit(mutations.UPDATE_SESSION, session)
          resolve()
        } else {
          reject()
        }
      })
    })
  },
  getRecentTracks ({ commit, state }, params = {}) {
    const query = Object.assign({}, params, defaultParams, {
      extended: 1,
      method: 'user.getRecentTracks'
    })

    q(query).then(({ recenttracks }) => commit(mutations.UPDATE_RECENT_TRACKS, recenttracks.track))
  },
  getTopAlbums ({ commit }, params = {}) {
    const query = Object.assign({}, params, defaultParams, {
      method: 'user.getTopAlbums'
    })

    q(query).then(({ topalbums }) => commit(mutations.UPDATE_TOP_ALBUMS, topalbums.album))
  },
  getTopArtists ({ commit }, params = {}) {
    const query = Object.assign({}, params, defaultParams, {
      method: 'user.getTopArtists'
    })

    q(query).then(({ topartists }) => commit(mutations.UPDATE_TOP_ARTISTS, topartists.artist))
  },
  getTopTracks ({ commit }, params) {
    const query = Object.assign({}, params, defaultParams, {
      method: 'user.getTopTracks'
    })

    q(query).then(({ toptracks }) => commit(mutations.UPDATE_TOP_TRACKS, toptracks.track))
  },
  getUserInfo ({ commit }, user) {
    const query = Object.assign({}, defaultParams, {
      api_key: defaultParams.api_key,
      method: 'user.getInfo',
      user
    })

    q(query).then(({ user }) => { commit(mutations.UPDATE_USER_INFO, user) })
  },
  loveTrack ({ commit, state }, track) {
    const params = {
      api_key: defaultParams.api_key,
      artist: track.artist.name,
      method: 'track.love',
      sk: state.session.key,
      track: track.name
    }

    const query = Object.assign({}, defaultParams, params, {
      api_sig: sign(params)
    })

    q(query, { method: 'POST' }).then(() => commit(mutations.LOVE_TRACK, track))
  },
  unloveTrack ({ commit, state }, track) {
    const params = {
      api_key: defaultParams.api_key,
      artist: track.artist.name,
      method: 'track.unlove',
      sk: state.session.key,
      track: track.name
    }

    const query = Object.assign({}, defaultParams, params, {
      api_sig: sign(params)
    })

    q(query, { method: 'POST' }).then(() => commit(mutations.UNLOVE_TRACK, track))
  }
}
