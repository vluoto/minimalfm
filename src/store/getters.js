export default {
  recentTracks (state) {
    return state.recentTracks
  },
  topAlbums (state) {
    return state.topAlbums
  },
  topArtists (state) {
    return state.topArtists
  },
  topTracks (state) {
    return state.topTracks
  },
  user (state) {
    return state.session && state.session.name
  },
  userInfo (state) {
    return state.userInfo
  }
}
