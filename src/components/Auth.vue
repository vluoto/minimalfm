<template lang="html">
</template>

<script>
import store from '@/store'

export default {
  name: 'Auth',

  beforeRouteEnter (to, from, next) {
    store.dispatch('authenticate', to.query.token).then(() => {
      next('/')
    }).catch(() => {
      next('/login')
    })
  }
}
</script>

<style lang="css">
</style>
