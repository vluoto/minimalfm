<template lang="html">
</template>

<script>
import store from '@/store'

export default {
  name: 'Auth',

  async beforeRouteEnter (to, from, next) {
    try {
      await store.dispatch('getSession', to.query.token)
      next('/')
    } catch (err) {
      next('/login')
    }
  }
}
</script>

<style lang="css">
</style>
