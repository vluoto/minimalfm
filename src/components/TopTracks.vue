<template lang="html">
  <div class="top-tracks">
    <h1>Top Tracks</h1>

    <div class="track-controls">
      <select v-model="limit" @change="getTracks" class="track-control">
        <option v-for="item in limits" :value="item.value">{{ item.text }}</option>
      </select>

      <select v-model="period" @change="getTracks" class="track-control">
        <option v-for="item in periods" :value="item.value">{{ item.text }}</option>
      </select>
    </div>

    <div v-if="topTracks.length > 0" class="tracks">
      <artist-track v-for="(track, index) in topTracks" :track="track" :key="index" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ArtistTrack from '@/components/ArtistTrack'
import Spinner from '@/components/Spinner'
import { requiresSession } from './mixins/requires-session'

export default {
  name: 'TopTracks',

  mixins: [requiresSession],

  data () {
    return {
      limit: 25,
      limits: [
        { text: 'Top 5', value: 5 },
        { text: 'Top 10', value: 10 },
        { text: 'Top 25', value: 25 },
        { text: 'Top 50', value: 50 },
        { text: 'Top 100', value: 100 }
      ],
      period: '3month',
      periods: [
        { text: 'All time', value: 'overall' },
        { text: 'Last 7 days', value: '7day' },
        { text: 'Last 1 month', value: '1month' },
        { text: 'Last 3 months', value: '3month' },
        { text: 'Last 6 months', value: '6month' },
        { text: 'Last 12 months', value: '12month' }
      ]
    }
  },
  created () {
    this.getTracks()
  },
  computed: {
    ...mapGetters(['topTracks', 'user'])
  },
  methods: {
    ...mapActions(['getTopTracks']),
    getTracks () {
      const { limit, period, user } = this

      this.getTopTracks({ limit, period, user })
    }
  },
  components: {
    ArtistTrack,
    Spinner
  }
}
</script>

<style scoped lang="scss">
.track-controls {
  display: flex;
  justify-content: center;

  .track-control:not(:last-of-type) {
    margin-right: 10px;
  }
}

.tracks {
  width: 600px;
  margin: 30px auto;
}
</style>
