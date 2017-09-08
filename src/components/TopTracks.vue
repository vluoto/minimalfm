<template lang="html">
  <div class="top-tracks">
    <h1>Top Tracks</h1>

    <controls :change="updateTracks"></controls>

    <div v-if="topTracks.length > 0" class="tracks">
      <artist-track v-for="(track, index) in topTracks" :track="track" :key="index" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ArtistTrack from '@/components/ArtistTrack'
import Controls from '@/components/Controls'
import Spinner from '@/components/Spinner'

export default {
  name: 'TopTracks',

  created () {
    this.updateTracks(25, '3month')
  },
  computed: {
    ...mapGetters(['topTracks', 'user'])
  },
  methods: {
    ...mapActions(['getTopTracks']),
    updateTracks (limit, period) {
      this.getTopTracks({ limit, period, user: this.user })
    }
  },
  components: {
    ArtistTrack,
    Controls,
    Spinner
  }
}
</script>

<style scoped lang="scss">
.tracks {
  width: 600px;
  margin: 30px auto;
}
</style>
