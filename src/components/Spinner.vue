<template lang="html">
  <div class="spinner-container">
    <div class="spinner">
      <icon name="circle-o-notch" scale="3" spin></icon>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/circle-o-notch'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'Spinner',

  components: {
    Icon
  }
}
</script>

<style lang="css">
.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
}

.spinner {
  flex-grow: 1;
}
</style>
