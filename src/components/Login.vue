<template lang="html">
  <a class="button" href="/api/authenticate">Sign in with Last.fm</a>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="css">
.button {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 150px);
}
</style>
