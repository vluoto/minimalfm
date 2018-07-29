<template lang="html">
  <div class="artist flip-container">
    <div class="flip">
      <div class="flip-front">
        <img class="artist-image" :src="image" :alt="artist.name">
      </div>
      <div class="flip-back">
        <div class="artist-name">
          <span>{{ artist.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    artist: Object
  },

  computed: {
    image () {
      const [, , , extralarge] = this.artist.image

      return extralarge['#text']
    }
  }
}
</script>

<style scoped lang="scss">
.artist {
  position: relative;

  .artist-name {
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

  .artist-image {
    width: 300px;
    height: 300px;
  }
}
</style>
