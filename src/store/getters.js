export default {
  recentTracks (state) {
    return state.recentTracks
  },
  topArtists (state) {
    return state.topArtists
  },
  user (state) {
    return state.session && state.session.name
  },
  userInfo (state) {
    return state.userInfo
  }
}
