<template>
  <div class="top-artists">
    <h1>Top Artists</h1>

    <div class="artist-controls">
      <select v-model="limit" @change="getArtists" class="artist-control">
        <option v-for="(item, index) in limits" :value="item.value" :key="index">{{ item.text }}</option>
      </select>

      <select v-model="period" @change="getArtists" class="artist-control">
        <option v-for="(item, index) in periods" :value="item.value" :key="index">{{ item.text }}</option>
      </select>
    </div>

    <div v-if="topArtists.length > 0" class="artists">
      <artist v-for="artist in topArtists" :artist="artist" :key="artist.id" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Artist from '@/components/Artist'
import Spinner from '@/components/Spinner'
import { requiresSession } from './mixins/requires-session'

export default {
  name: 'TopArtists',

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
    this.getArtists()
  },
  computed: {
    ...mapGetters(['topArtists', 'user'])
  },
  methods: {
    ...mapActions(['getTopArtists']),
    getArtists () {
      const { limit, period, user } = this

      this.getTopArtists({ limit, period, user })
    }
  },
  components: {
    Artist,
    Spinner
  }
}
</script>

<style scoped lang="scss">
.artist-controls {
  display: flex;
  justify-content: center;

  .artist-control:not(:last-of-type) {
    margin-right: 10px;
  }
}

.artists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0;
  margin: 30px 0;
}
</style>
