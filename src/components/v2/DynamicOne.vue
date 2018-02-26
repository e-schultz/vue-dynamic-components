<template>
  <div>
    <h1>Dynamic Component One</h1>
    <p>Hello {{firstName}} {{lastName}}</p>
    <button @click="$emit('upperCase')">Upper Case</button>
  </div>
</template>
<script>
export default {
  name: 'DynamicOne',
  props: ['firstName', 'lastName']
}
</script>