<template lang="html">
  <img v-show="!!this.userInfo" :src="image" :alt="name" :title="name">
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  }
}
</script>

<style scoped lang="css">
img {
  border-radius: 50%;
}
</style>
