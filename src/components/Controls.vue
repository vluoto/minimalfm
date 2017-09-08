<template>
  <div class="controls">
    <select v-model="limit" @change="change(limit, period)" class="control">
      <option v-for="(item, index) in limits" :value="item.value" :key="index">{{ item.text }}</option>
    </select>

    <select v-model="period" @change="change(limit, period)" class="control">
      <option v-for="(item, index) in periods" :value="item.value" :key="index">{{ item.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['change'],

  data () {
    return {
      limit: 25,
      limits: [
        { text: 'Top 5', value: 5 },
        { text: 'Top 10', value: 10 },
        { text: 'Top 25', value: 25 },
        { text: 'Top 50', value: 50 },
        { text: 'Top 100', value: 100 }
      ],
      period: '3month',
      periods: [
        { text: 'All time', value: 'overall' },
        { text: 'Last 7 days', value: '7day' },
        { text: 'Last 1 month', value: '1month' },
        { text: 'Last 3 months', value: '3month' },
        { text: 'Last 6 months', value: '6month' },
        { text: 'Last 12 months', value: '12month' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: center;

  .control:not(:last-of-type) {
    margin-right: 10px;
  }
}
</style>
