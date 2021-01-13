<template>
  <div id="app">
    <h1>Hello parent</h1>

    <ChildComp>
      <h3 slot="title">I am car: {{carName}}</h3>  
      <p slot="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti iusto eos, dolore commodi maiores atque eum?</p>  
    </ChildComp>

    <Child2>

    </Child2>
  </div>
</template>

<script>
import ChildComp from './components/ChildComp.vue'
import Child2 from './components/Child2'

export default {
  name: 'App',
  data(){
    return {
      carName: 'Audi'
    }
  },
  components: {
    ChildComp,
    Child2,
  },
}
</script>

<style>

</style>
