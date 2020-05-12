<template>
  <div id="app">
    <h1>HackerNews Tech Trends</h1>
    <Techs @checked='toggleTech' :techs='techs' />
    <div style='width: 70%; margin: 50px auto;'>
      <Graph :techs='techs.filter(e => e.checked).map(e => e.name)' />
    </div>
    
  </div>
</template>

<script>
import Graph from './components/Graph.vue'
import Techs from './components/Techs.vue'
import { techs } from './utils'

export default {
  name: 'App',
  components: {
    Graph,
    Techs
  },
  data: function() {
    return {
      techs: Object.keys(techs).map(t => ({ name: t, label: techs[t].label, checked: true }))
    }
  },
  methods: {
    toggleTech(index) {
      this.techs[index].checked = !this.techs[index].checked
    }
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
