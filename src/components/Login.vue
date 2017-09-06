<template lang="html">
  <a class="button" :href="authUri">Sign in with Last.fm</a>
</template>

<script>
export default {
  name: 'Login',

  computed: {
    authUri () {
      return `https://last.fm/api/auth/?api_key=${process.env.LASTFM_API_KEY}&cb=http://localhost:8080/auth`
    }
  }
}
</script>

<style scoped lang="css">
.button {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 150px);
}
</style>
