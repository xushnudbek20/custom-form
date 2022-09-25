<template>
  <div id="app">
    <h2>Custom Form</h2>
    <hr>
    <Toolbar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Toolbar from '@/views/tool-bar.vue'

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
