<template lang="html">
  <div class="recent-tracks">
    <h1>Recent Tracks</h1>

    <div v-if="recentTracks.length > 0" class="tracks">
      <artist-track v-for="(track, index) in recentTracks" :track="track" :key="index" />
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
      limit: 25
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
    Spinner
  }
}
</script>

<style scoped lang="css">
.tracks {
  width: 600px;
  margin: 30px auto;
}
</style>
