<template lang="html">
  <div id="top-tracks">
    <h1>Top Tracks</h1>

    <controls :change="updateTracks"></controls>

    <div v-if="topTracks.length > 0" class="tracks">
      <artist-track v-for="(track, index) in topTracks" :track="track" :key="index" />
    </div>
    <div v-else class="tracks">
      <artist-track-skeleton v-for="(n, index) in limit" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ArtistTrack from '@/components/ArtistTrack'
import ArtistTrackSkeleton from '@/components/ArtistTrackSkeleton'
import Controls from '@/components/Controls'

export default {
  name: 'TopTracks',

  data () {
    return {
      limit: 25,
      period: '3month'
    }
  },
  created () {
    const { limit, period } = '3month'

    this.updateTracks(limit, period)
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
    ArtistTrackSkeleton,
    Controls
  }
}
</script>

<style scoped lang="scss">
.tracks {
  width: 600px;
  margin: 30px auto;
}
</style>
