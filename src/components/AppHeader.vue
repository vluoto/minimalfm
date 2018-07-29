<template lang="html">
  <header>
    <nav>
      <router-link to="#recent-tracks">Recent Tracks</router-link>
      <router-link to="#top-artists">Top Artists</router-link>
      <router-link to="#top-albums">Top Albums</router-link>
      <router-link to="#top-tracks">Top Tracks</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  z-index: 1337;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: whitesmoke;

  nav {
    display: flex;
    margin: 0 auto;
    justify-content: center;

    a {
      color: #000;
      text-decoration: none;
    }

    a:not(:last-of-type) {
      margin-right: 10px;
    }

    a:hover, .router-link-exact-active {
      text-decoration: underline;
    }
  }

  .profile-link {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0;
  }
}
</style>
