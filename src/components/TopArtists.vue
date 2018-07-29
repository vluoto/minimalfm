<template>
  <div id="top-artists">
    <h1>Top Artists</h1>

    <controls :change="updateArtists"></controls>

    <div v-if="topArtists.length > 0" class="artists">
      <artist v-for="artist in topArtists" :artist="artist" :key="artist.id" />
    </div>
    <div v-else class="artists">
      <artist-skeleton v-for="(n, index) in limit" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Artist from '@/components/Artist'
import ArtistSkeleton from '@/components/ArtistSkeleton'
import Controls from '@/components/Controls'

export default {
  name: 'TopArtists',

  data () {
    return {
      limit: 25,
      period: '3month'
    }
  },
  created () {
    const { limit, period } = this

    this.updateArtists(limit, period)
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
    ArtistSkeleton,
    Controls
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
