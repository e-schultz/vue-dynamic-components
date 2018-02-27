<template>
  <div>
    <button @click="showWhich = 'DynamicOne'">Show Component One</button>

    <button @click="showWhich = 'DynamicTwo'">Show Component Two</button>

    <component :is="showWhich"
               v-bind="person"
               @upperCase="switchCase('upperCase')"
               @lowerCase="switchCase('lowerCase')">
    </component>
  </div>
</template>

<script>
import DynamicOne from "../components/v2/DynamicOne.vue";
import DynamicTwo from "../components/v2/DynamicTwo.vue";

export default {
  name: "DemoOne",
  components: {
    DynamicOne,
    DynamicTwo
  },
  data() {
    return {
      showWhich: "DynamicOne",
      person: {
        title: "Mr",
        firstName: "Evan",
        lastName: "Schultz"
      }
    };
  },
  methods: {
    switchCase: function x(toCase) {
      Object.keys(this.person).forEach(value => {
        this.person[value] =
          toCase === "upperCase"
            ? this.person[value].toUpperCase()
            : this.person[value].toLowerCase();
      });
    }
  }
};
</script>
