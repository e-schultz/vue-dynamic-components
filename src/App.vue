<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/demo-1">DemoOne</router-link>
      </li>
      <li>
        <router-link to="/demo-2">DemoTwo</router-link>
      </li>
      <li>
        <router-link to="/demo-3">DemoThree</router-link>
      </li>
      <li>
        <router-link to="/demo-4">DemoFour</router-link>
      </li>
      <li>
        <router-link to="/demo-5">DemoFive</router-link>
      </li>
    </ul>
    <router-view></router-view>
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
      showWhich: "DemoOne"
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

ul.nav > li {
  display: inline;
  padding-left: 10px;
}
ul.nav > li::before {
  content: "\2630";
  padding-right: 5px;
}
</style>
