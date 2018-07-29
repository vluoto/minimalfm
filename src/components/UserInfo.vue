<template lang="html">
  <avatar v-if="!!this.userInfo" :image="image" :name="name" />
  <avatar-skeleton v-else />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Avatar from '@/components/Avatar'
import AvatarSkeleton from '@/components/AvatarSkeleton'

export default {
  props: ['name'],

  created () {
    this.getUserInfo(this.name)
  },
  computed: {
    ...mapGetters(['userInfo']),
    image () {
      return this.userInfo && this.userInfo.image[2]['#text']
    }
  },
  methods: {
    ...mapActions(['getUserInfo'])
  },
  components: {
    Avatar,
    AvatarSkeleton
  }
}
</script>
