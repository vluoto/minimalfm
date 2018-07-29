<template>
  <img :src="image" :alt="name" :title="name">
</template>

<script>
export default {
  props: ['image', 'name']
}
</script>

<style scoped lang="css">
img {
  border-radius: 50%;
}
</style>
