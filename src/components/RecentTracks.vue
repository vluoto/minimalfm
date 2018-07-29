<template lang="html">
  <div id="recent-tracks">
    <h1>Recent Tracks</h1>

    <div v-if="recentTracks.length > 0" class="tracks">
      <artist-track v-for="(track, index) in recentTracks" :track="track" :key="index" />
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

export default {
  name: 'RecentTracks',

  data () {
    return {
      limit: 10
    }
  },
  created () {
    const { limit, user } = this

    this.getRecentTracks({ limit, user })
  },
  computed: {
    ...mapGetters(['recentTracks', 'user'])
  },
  methods: {
    ...mapActions(['getRecentTracks'])
  },
  components: {
    ArtistTrack,
    ArtistTrackSkeleton
  }
}
</script>

<style scoped lang="css">
.tracks {
  width: 600px;
  margin: 30px auto;
}
</style>
