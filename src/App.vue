<template>
  <div id="app">
    <h1>Hello parent</h1>

    <h3 v-colored v-if="on">I am car: {{carName}}</h3>

    <button @click="on = !on">On/Off</button> 
    <button>change</button> 
      
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      carName: 'Audi',
      on: true
    }
  },
  components: {
    
  },
}
</script>

<style>

</style>
