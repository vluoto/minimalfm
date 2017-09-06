<template lang="html">
  <div class="recent-tracks">
    <h1>Recent Tracks</h1>

    <div v-if="tracks.length > 0" class="tracks">
      <artist-track v-for="(track, index) in tracks" :track="track" :key="index" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ArtistTrack from '@/components/ArtistTrack'
import Spinner from '@/components/Spinner'

export default {
  name: 'RecentTracks',

  data () {
    return {
      limit: 20
    }
  },
  created () {
    // FIXME: Figure out how to ensure `user` is available before entering the route.
    if (this.user) {
      this.getRecentTracksFor(this.user)
    }
  },
  computed: {
    ...mapGetters({
      tracks: 'recentTracks',
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['getRecentTracks']),
    getRecentTracksFor (user) {
      this.getRecentTracks({ limit: this.limit, user })
    }
  },
  // FIXME: Figure out how to ensure `user` is available before entering the route.
  watch: {
    user (user) {
      this.getRecentTracksFor(user)
    }
  },
  components: {
    ArtistTrack,
    Spinner
  }
}
</script>

<style scoped lang="css">
.tracks {
  width: 600px;
  margin: 0 auto;
}
</style>
