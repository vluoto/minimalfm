import localforage from 'localforage'

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
          commit('session', session)
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
          commit('session', session)
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

    q(query).then(({ recenttracks }) => commit('recentTracks', recenttracks.track))
  },
  getTopArtists ({ commit, state }, params = {}) {
    const query = Object.assign({}, params, defaultParams, {
      method: 'user.getTopArtists'
    })

    q(query).then(({ topartists }) => commit('topArtists', topartists.artist))
  },
  getUserInfo ({ commit }, user) {
    const query = Object.assign({}, defaultParams, {
      api_key: defaultParams.api_key,
      method: 'user.getInfo',
      user
    })

    q(query).then(({ user }) => { commit('userInfo', user) })
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

    q(query, { method: 'POST' }).then(() => commit('loveTrack', track))
  },
  unloveTrack ({ commit, state }, track) {
    const params = {
      api_key: defaultParams.api_key,
      artist: encodeURIComponent(track.artist.name),
      method: 'track.unlove',
      sk: state.session.key,
      track: encodeURIComponent(track.name)
    }

    const query = Object.assign({}, defaultParams, params, {
      api_sig: sign(params)
    })

    q(query, { method: 'POST' }).then(() => commit('unloveTrack', track))
  }
}
