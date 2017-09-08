<template>
  <div class="profile">
    <div class="avatar-wrapper">
      <avatar :name="user"></avatar>
    </div>
    <recent-tracks />
    <top-artists />
    <top-albums />
    <top-tracks />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Avatar from '@/components/Avatar'
import RecentTracks from '@/components/RecentTracks'
import TopAlbums from '@/components/TopAlbums'
import TopArtists from '@/components/TopArtists'
import TopTracks from '@/components/TopTracks'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    Avatar,
    RecentTracks,
    TopAlbums,
    TopArtists,
    TopTracks
  }
}
</script>

<style lang="scss" scoped>
  .avatar-wrapper {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
</style>
