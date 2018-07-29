<template lang="html">
  <div class="album flip-container">
    <div class="flip">
      <div class="flip-front">
        <img class="album-image" :src="image" :alt="album.name">
      </div>
      <div class="flip-back">
        <div class="album-name">
          <span>{{ album.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const DEFAULT_IMAGE = 'https://lastfm-img2.akamaized.net/i/u/300s/c6f59c1e5e7240a4c0d427abd71f3dbb'

export default {
  name: 'Album',
  props: {
    album: Object
  },

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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181818;
    width: 100%;
    height: 100%;
    color: whitesmoke;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
  }

  .album-image {
    width: 300px;
    height: 300px;
  }
}
</style>
