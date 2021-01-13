<template>
  <div id="app">
    <h1>Hello parent</h1>

    <h3 v-colored>I am car: {{carName}}</h3>  
      
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      carName: 'Audi'
    }
  },
  components: {
    
  },
}
</script>

<style>

</style>
