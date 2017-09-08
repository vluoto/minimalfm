import * as types from './mutation-types'
import withQuery from '@/utils/with-query'
import sign from '@/utils/sign'
import { restoreSession, saveSession } from '@/utils/auth'

const defaultParams = {
  api_key: process.env.LASTFM_API_KEY,
  format: 'json'
}

const q = (query, fetchOptions = {}) => {
  return fetch(withQuery(process.env.LASTFM_API_URL, query), fetchOptions).then(response => {
    return response.json()
  })
}

export default {
  authenticate ({ commit }, token) {
    const params = {
      api_key: defaultParams.api_key,
      method: 'auth.getSession',
      token
    }

    const query = {
      ...defaultParams,
      ...params,
      api_sig: sign(params)
    }

    return new Promise((resolve, reject) => {
      q(query).then(({ session }) => {
        if (session) {
          commit(types.UPDATE_SESSION, session)
          saveSession(session).finally(() => {
            resolve()
          })
        } else {
          reject()
        }
      })
    })
  },
  getRecentTracks ({ commit, state }, params = {}) {
    const query = {
      ...defaultParams,
      ...params,
      extended: 1,
      method: 'user.getRecentTracks'
    }

    q(query).then(({ recenttracks }) => commit(types.UPDATE_RECENT_TRACKS, recenttracks.track))
  },
  getTopAlbums ({ commit }, params = {}) {
    const query = {
      ...defaultParams,
      ...params,
      method: 'user.getTopAlbums'
    }

    q(query).then(({ topalbums }) => commit(types.UPDATE_TOP_ALBUMS, topalbums.album))
  },
  getTopArtists ({ commit }, params = {}) {
    const query = {
      ...defaultParams,
      ...params,
      method: 'user.getTopArtists'
    }

    q(query).then(({ topartists }) => commit(types.UPDATE_TOP_ARTISTS, topartists.artist))
  },
  getTopTracks ({ commit }, params) {
    const query = {
      ...defaultParams,
      ...params,
      method: 'user.getTopTracks'
    }

    q(query).then(({ toptracks }) => commit(types.UPDATE_TOP_TRACKS, toptracks.track))
  },
  getUserInfo ({ commit }, user) {
    const query = {
      ...defaultParams,
      method: 'user.getInfo',
      user
    }

    q(query).then(({ user }) => { commit(types.UPDATE_USER_INFO, user) })
  },
  loveTrack ({ commit, state }, track) {
    const params = {
      api_key: defaultParams.api_key,
      artist: track.artist.name,
      method: 'track.love',
      sk: state.session.key,
      track: track.name
    }

    const query = {
      ...defaultParams,
      ...params,
      api_sig: sign(params)
    }

    q(query, { method: 'POST' }).then(() => commit(types.LOVE_TRACK, track))
  },
  restoreSession ({ commit }) {
    return restoreSession().then((session) => {
      commit(types.UPDATE_SESSION, session)
    })
  },
  unloveTrack ({ commit, state }, track) {
    const params = {
      api_key: defaultParams.api_key,
      artist: track.artist.name,
      method: 'track.unlove',
      sk: state.session.key,
      track: track.name
    }

    const query = {
      ...defaultParams,
      ...params,
      api_sig: sign(params)
    }

    q(query, { method: 'POST' }).then(() => commit(types.UNLOVE_TRACK, track))
  }
}
