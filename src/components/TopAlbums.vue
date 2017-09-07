<template lang="html">
  <div class="top-albums">
    <h1>Top Albums</h1>

    <div class="album-controls">
      <select v-model="limit" @change="getTopAlbumsFor(user)" class="album-control">
        <option v-for="item in limits" :value="item.value">{{ item.text }}</option>
      </select>

      <select v-model="period" @change="getTopAlbumsFor(user)" class="album-control">
        <option v-for="item in periods" :value="item.value">{{ item.text }}</option>
      </select>
    </div>

    <div v-if="albums.length > 0" class="albums">
      <album v-for="album in albums" :album="album" :key="album.id" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Album from '@/components/Album'
import Spinner from '@/components/Spinner'

export default {
  name: 'TopAlbums',

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
    // FIXME: Figure out how to ensure `user` is available before entering the route.
    if (this.user) {
      this.getTopAlbumsFor(this.user)
    }
  },
  computed: {
    ...mapGetters({
      albums: 'topAlbums',
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['getTopAlbums']),
    getTopAlbumsFor (user) {
      this.getTopAlbums({
        limit: this.limit,
        period: this.period,
        user
      })
    }
  },
  watch: {
    user (user) {
      this.getTopAlbumsFor(user)
    }
  },
  components: {
    Album,
    Spinner
  }
}
</script>

<style scoped lang="css">
.album-controls {
  display: flex;
  justify-content: center;
}

.album-control:not(:last-of-type) {
  margin-right: 10px;
}

.albums {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0;
  margin: 30px 0;
}
</style>
