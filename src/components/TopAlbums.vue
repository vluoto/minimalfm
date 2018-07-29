<template lang="html">
  <div id="top-albums">
    <h1>Top Albums</h1>

    <controls :change="updateAlbums"></controls>

    <div v-if="topAlbums.length > 0" class="albums">
      <album v-for="album in topAlbums" :album="album" :key="album.id" />
    </div>
    <div v-else class="albums">
      <album-skeleton v-for="(n, index) in limit" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Album from '@/components/Album'
import AlbumSkeleton from '@/components/AlbumSkeleton'
import Controls from '@/components/Controls'

export default {
  name: 'TopAlbums',

  data () {
    return {
      limit: 25,
      period: '3month'
    }
  },
  created () {
    const { limit, period } = this

    this.updateAlbums(limit, period)
  },
  computed: {
    ...mapGetters(['topAlbums', 'user'])
  },
  methods: {
    ...mapActions(['getTopAlbums']),
    updateAlbums (limit, period) {
      this.getTopAlbums({ limit, period, user: this.user })
    }
  },
  components: {
    Album,
    AlbumSkeleton,
    Controls
  }
}
</script>

<style scoped lang="scss">
.albums {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0;
  margin: 30px 0;
}
</style>
