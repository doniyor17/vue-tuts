<template>
  <div id="app">
    <h1>Hello parent</h1>
    <ChildComp />
    <Child2 />
  </div>
</template>

<script>
import ChildComp from './components/ChildComp.vue'
import Child2 from './components/Child2'

export default {
  name: 'App',
  components: {
    ChildComp,
    Child2,
  },
}
</script>

<style>

</style>
