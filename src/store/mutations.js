import * as mutations from './mutation-types'

export default {
  [mutations.LOVE_TRACK] (state, track) {
    const cb = t => t.name === track.name && t.artist.name === track.artist.name
    const result = state.recentTracks.find(cb)

    if (result) result.loved = '1'
  },
  [mutations.UNLOVE_TRACK] (state, track) {
    const cb = t => t.name === track.name && t.artist.name === track.artist.name
    const result = state.recentTracks.find(cb)

    if (result) result.loved = '0'
  },
  [mutations.UPDATE_RECENT_TRACKS] (state, tracks) {
    state.recentTracks = tracks
  },
  [mutations.UPDATE_SESSION] (state, session) {
    state.session = session
  },
  [mutations.UPDATE_TOP_ALBUMS] (state, albums) {
    state.topAlbums = albums
  },
  [mutations.UPDATE_TOP_ARTISTS] (state, artists) {
    state.topArtists = artists
  },
  [mutations.UPDATE_TOP_TRACKS] (state, tracks) {
    state.topTracks = tracks
  },
  [mutations.UPDATE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
