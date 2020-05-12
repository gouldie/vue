<template>
  <div>
    <p-check v-for="(tech, index) in techs" :key="tech.name" class="p-default p-curve" name="check" color="success" v-model="techs[index].checked">{{ tech.label }}</p-check>
  </div>
</template>

<script>
import { techs } from '../utils'

export default {
  data: function() {
    return {
      techs: Object.keys(techs).map(t => ({ name: t, label: techs[t].label, checked: true }))
    }
  }
}
</script>

<style>
  .pretty label {
    font-size: 15px;
  }
</style>