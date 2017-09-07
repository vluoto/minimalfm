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
  topAlbums (state, albums) {
    state.topAlbums = albums
  },
  topArtists (state, artists) {
    state.topArtists = artists
  },
  topTracks (state, tracks) {
    state.topTracks = tracks
  },
  unloveTrack (state, track) {
    track.loved = '0'
  },
  userInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
