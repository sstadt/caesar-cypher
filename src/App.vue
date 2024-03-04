<template>
  <div id="app" class="container">
    <Cypher/>
  </div>
</template>

<script>
import Cypher from './components/Cypher';

export default {
  name: 'App',
  components: {
    Cypher,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
