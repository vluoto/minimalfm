<template lang="html">
  <div class="top-albums">
    <h1>Top Albums</h1>

    <div class="album-controls">
      <select v-model="limit" @change="getAlbums" class="album-control">
        <option v-for="item in limits" :value="item.value">{{ item.text }}</option>
      </select>

      <select v-model="period" @change="getAlbums" class="album-control">
        <option v-for="item in periods" :value="item.value">{{ item.text }}</option>
      </select>
    </div>

    <div v-if="topAlbums.length > 0" class="albums">
      <album v-for="album in topAlbums" :album="album" :key="album.id" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Album from '@/components/Album'
import Spinner from '@/components/Spinner'
import { requiresSession } from './mixins/requires-session'

export default {
  name: 'TopAlbums',

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
    this.getAlbums()
  },
  computed: {
    ...mapGetters(['topAlbums', 'user'])
  },
  methods: {
    ...mapActions(['getTopAlbums']),
    getAlbums () {
      const { limit, period, user } = this

      this.getTopAlbums({ limit, period, user })
    }
  },
  components: {
    Album,
    Spinner
  }
}
</script>

<style scoped lang="scss">
.album-controls {
  display: flex;
  justify-content: center;

  .album-control:not(:last-of-type) {
    margin-right: 10px;
  }
}

.albums {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0;
  margin: 30px 0;
}
</style>
