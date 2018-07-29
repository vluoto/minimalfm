<template>
  <div class="track">
    <div class="track-image"></div>
    <div class="track-name"></div>
  </div>
</template>

<style lang="scss" scoped>
.track {
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    .track-image {
      background-color: darkgray;
    }
  }

  .track-image, .track-love {
    margin-right: 10px;
  }

  .track-image {
    width: 34px;
    height: 34px;
    background-color: lightgray;
  }

  .track-name {
    height: 20px;
    display: flex;
    flex-grow: 1;
    background-color: lightgray;
  }
}
</style>
