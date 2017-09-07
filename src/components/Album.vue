<template lang="html">
  <div class="album">
    <span class="album-name">{{ album.name }}</span>
    <img class="album-image" :src="image" :alt="album.name">
  </div>
</template>

<script>
const DEFAULT_IMAGE = 'https://lastfm-img2.akamaized.net/i/u/300s/c6f59c1e5e7240a4c0d427abd71f3dbb'

export default {
  name: 'Album',
  props: ['album'],

  computed: {
    image () {
      const [, , , extralarge] = this.album.image

      return extralarge['#text'] || DEFAULT_IMAGE
    }
  }
}
</script>

<style scoped lang="scss">
.album {
  position: relative;

  .album-name {
    color: #fff;
    font-size: 20px;
    position: absolute;
    text-transform: uppercase;
    bottom: 0;
    left: 5px;
  }

  .album-image {
    width: 300px;
    height: 300px;
  }
}
</style>
