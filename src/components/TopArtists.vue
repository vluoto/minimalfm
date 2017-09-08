<template>
  <div class="top-artists">
    <h1>Top Artists</h1>

    <controls :change="updateArtists"></controls>

    <div v-if="topArtists.length > 0" class="artists">
      <artist v-for="artist in topArtists" :artist="artist" :key="artist.id" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Artist from '@/components/Artist'
import Controls from '@/components/Controls'
import Spinner from '@/components/Spinner'

export default {
  name: 'TopArtists',

  created () {
    this.updateArtists(25, '3month')
  },
  computed: {
    ...mapGetters(['topArtists', 'user'])
  },
  methods: {
    ...mapActions(['getTopArtists']),
    updateArtists (limit, period) {
      this.getTopArtists({ limit, period, user: this.user })
    }
  },
  components: {
    Artist,
    Controls,
    Spinner
  }
}
</script>

<style scoped lang="scss">
.artists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0;
  margin: 30px 0;
}
</style>
