<template lang="html">
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Auth',

  created () {
    this.authenticate(this.$route.query.token).then(() => {
      this.$router.push('/')
    }).catch(() => {
      this.$router.push('/login')
    })
  },
  methods: {
    ...mapActions(['authenticate'])
  }
}
</script>

<style lang="css">
</style>
