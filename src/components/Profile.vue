<template>
  <div class="profile">
    <div class="user-info-wrapper">
      <user-info :name="user" />
    </div>
    <recent-tracks />
    <top-artists />
    <top-albums />
    <top-tracks />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import UserInfo from '@/components/UserInfo'
import RecentTracks from '@/components/RecentTracks'
import TopAlbums from '@/components/TopAlbums'
import TopArtists from '@/components/TopArtists'
import TopTracks from '@/components/TopTracks'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    UserInfo,
    RecentTracks,
    TopAlbums,
    TopArtists,
    TopTracks
  }
}
</script>

<style lang="scss" scoped>
  .user-info-wrapper {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    height: 170px;
  }
</style>
