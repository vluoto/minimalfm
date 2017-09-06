<template lang="html">
  <div class="artist">
    <span class="artist-name">{{ artist.name }}</span>
    <img :src="image" :alt="artist.name">
  </div>
</template>

<script>
export default {
  name: 'Artist',
  props: ['artist'],

  computed: {
    image () {
      const [, , , extralarge] = this.artist.image

      return extralarge['#text']
    }
  }
}
</script>

<style lang="css">
.artist {
  position: relative;
}

.artist-name {
  color: #fff;
  font-size: 20px;
  position: absolute;
  text-transform: uppercase;
  bottom: 0;
  left: 5px;
}
</style>
