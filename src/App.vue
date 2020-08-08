<template>
  <div id="app">
    <p-home></p-home>
  </div>
</template>

<script>
import { pHome } from './components/pages/home';

export default {
  name: 'App',
  components: {
    pHome
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
