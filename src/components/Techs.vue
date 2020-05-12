<template>
  <div>
    
    <p-check v-for="tech in techs" :key="tech.name" class="p-default p-curve" name="check" color="success" v-model="check">{{ tech.label }}</p-check>
    
    <!-- <div v-for="tech in techs" :key="tech"> -->
      <!-- <p-check class="p-default p-curve" name="check" color="success" v-model="check">Check</p-check> -->
    
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      techs: [
        { name: 'react', label: 'React', checked: true },
        { name: 'rust', label: 'Rust', checked: false },
      ]
    }
  }
}
</script>

<style>
  .pretty label {
    font-size: 15px;
  }
</style>