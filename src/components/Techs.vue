<template>
  <div>
    <!-- <p-check v-for="(tech, index) in techs" :key="tech.name" class="p-default p-curve" name="check" color="success" v-model="techs[index].checked">{{ tech.label }}</p-check> -->
    <p-check 
      v-for="(tech, index) in techs" 
      :key="tech.name" 
      class="p-default p-curve" 
      color="success" 
      v-on:change='emit(index)'
      checked='tech.checked'
    >
      {{ tech.label }}
    </p-check>
  </div>
</template>

<script>

export default {
  props: [
    'techs'
  ],
  methods: {
    emit(index) {
      this.$emit('checked', index)
    }
  }
}
</script>

<style>
  .pretty label {
    font-size: 15px;
  }
</style>