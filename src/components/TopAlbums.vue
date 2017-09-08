<template lang="html">
  <div class="top-albums">
    <h1>Top Albums</h1>

    <controls :change="updateAlbums"></controls>

    <div v-if="topAlbums.length > 0" class="albums">
      <album v-for="album in topAlbums" :album="album" :key="album.id" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Album from '@/components/Album'
import Controls from '@/components/Controls'
import Spinner from '@/components/Spinner'

export default {
  name: 'TopAlbums',

  created () {
    this.updateAlbums(25, '3month')
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
    Controls,
    Spinner
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
