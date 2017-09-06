<template>
  <div class="top-artists">
    <h1>Top Artists</h1>

    <div v-if="artists.length > 0" class="artists">
      <artist v-for="artist in artists" :artist="artist" :key="artist.id" />
    </div>
    <spinner v-else></spinner>
  </div>
</template>

<script type="text/babel">
import { mapActions, mapGetters } from 'vuex'

import Artist from '@/components/Artist'
import Spinner from '@/components/Spinner'

export default {
  name: 'TopArtists',

  data () {
    return {
      limit: 20,
      period: '3month'
    }
  },
  created () {
    // FIXME: Figure out how to ensure `user` is available before entering the route.
    if (this.user) {
      this.getTopArtistsFor(this.user)
    }
  },
  computed: {
    ...mapGetters({
      artists: 'topArtists',
      user: 'user'
    })
  },
  methods: {
    ...mapActions(['getTopArtists']),
    getTopArtistsFor (user) {
      this.getTopArtists({
        limit: this.limit,
        period: this.period,
        user
      })
    }
  },
  // FIXME: Figure out how to ensure `user` is available before entering the route.
  watch: {
    user (user) {
      this.getTopArtistsFor(user)
    }
  },
  components: {
    Artist,
    Spinner
  }
}
</script>

<style scoped>
.artists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0;
  padding: 0 0 30px;
}
</style>
