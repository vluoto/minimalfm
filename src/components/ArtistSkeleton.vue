<template>
  <div class="artist">
    <div class="artist-image"></div>
  </div>
</template>

<style lang="scss" scoped>
.artist {
  width: 300px;
  height: 300px;

  &:nth-child(odd) {
    .artist-image {
      background-color: darkgray;
    }
  }

  .artist-image {
    width: 100%;
    height: 100%;
    background-color: lightgray;
  }
}
</style>
