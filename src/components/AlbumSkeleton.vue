<template>
  <div class="album">
    <div class="album-image"></div>
  </div>
</template>

<style lang="scss" scoped>
.album {
  width: 300px;
  height: 300px;

  &:nth-child(odd) {
    .album-image {
      background-color: darkgray;
    }
  }

  .album-image {
    width: 100%;
    height: 100%;
    background-color: lightgray;
  }
}
</style>
