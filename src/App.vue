<template>
  <div id="app">
    <button @click="showWhich = 'DemoOne'">Demo One</button>
    <button @click="showWhich = 'DemoTwo'">Demo Two</button>
    <button @click="showWhich = 'DemoThree'">Demo Three</button>
    <button @click="showWhich = 'DemoFour'">Demo Four</button>
    <button @click="showWhich = 'DemoFive'">Demo Five</button>
    <component :is="showWhich"></component>
  </div>
</template>

<script>
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
import DemoThree from './components/DemoThree.vue'
import DemoFour from './components/DemoFour.vue'
import DemoFive from './components/DemoFive.vue'


export default {
  name: 'app',
  components: {
    DemoOne, DemoTwo, DemoThree, DemoFour, DemoFive
  },
  data() {
    return {
      showWhich: 'DemoOne'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
