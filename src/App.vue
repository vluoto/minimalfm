<template>
  <div id="app">
    <app-header v-if="!!user"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',

  computed: {
    ...mapGetters(['user'])
  },
  components: {
    AppHeader
  }
}
</script>

<style>
@import url('http://fonts.googleapis.com/css?family=Arvo');

html, body {
  height: 100%;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Arvo', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  text-align: center;
}

.button {
  text-decoration: none;
  color: #fff;
  background-color: #b90000;
  font-weight: 600;
  height: 60px;
  width: 300px;
  line-height: 60px;
  text-align: center;
}

.button:hover, select:hover {
  background-color: #d50000;
}

select {
  background-color: #b90000;
  border: 0;
  width: 150px;
  border-radius: 0;
  height: 30px;
  -webkit-appearance: none;
  text-align-last: center;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  outline: 0;
}
</style>
