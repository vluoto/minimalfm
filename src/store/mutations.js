import * as types from './mutation-types'

export default {
  [types.LOVE_TRACK] (state, track) {
    const cb = t => t.name === track.name && t.artist.name === track.artist.name
    const result = state.recentTracks.find(cb)

    if (result) result.loved = '1'
  },
  [types.UNLOVE_TRACK] (state, track) {
    const cb = t => t.name === track.name && t.artist.name === track.artist.name
    const result = state.recentTracks.find(cb)

    if (result) result.loved = '0'
  },
  [types.UPDATE_RECENT_TRACKS] (state, tracks) {
    state.recentTracks = tracks
  },
  [types.UPDATE_SESSION] (state, session) {
    state.session = session
  },
  [types.UPDATE_TOP_ALBUMS] (state, albums) {
    state.topAlbums = albums
  },
  [types.UPDATE_TOP_ARTISTS] (state, artists) {
    state.topArtists = artists
  },
  [types.UPDATE_TOP_TRACKS] (state, tracks) {
    state.topTracks = tracks
  },
  [types.UPDATE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
