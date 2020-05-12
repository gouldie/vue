<template>
  <div id="app">
    <h1>HackerNews Tech Trends</h1>
    <Techs />
    <div style='width: 70%; margin: 50px auto;'>
      <Graph />
    </div>
    
  </div>
</template>

<script>
import Graph from './components/Graph.vue'
import Techs from './components/Techs.vue'

export default {
  name: 'App',
  components: {
    Graph,
    Techs
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
