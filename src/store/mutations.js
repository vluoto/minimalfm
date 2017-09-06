export default {
  loveTrack (state, track) {
    track.loved = '1'
  },
  recentTracks (state, tracks) {
    state.recentTracks = tracks
  },
  session (state, session) {
    state.session = session
  },
  topArtists (state, artists) {
    state.topArtists = artists
  },
  unloveTrack (state, track) {
    track.loved = '0'
  },
  userInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
