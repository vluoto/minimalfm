<template>
  <img :src="image" :alt="name" :title="name">
</template>

<script>
export default {
  props: {
    image: String,
    name: String
  }
}
</script>

<style scoped lang="css">
img {
  border-radius: 50%;
}
</style>
