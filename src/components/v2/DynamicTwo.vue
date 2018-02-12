<template>
  <div>
    <h1>Dynamic Component Two</h1>
    <p>Hello {{title}} {{firstName}} {{lastName}}</p>
    <button @click="$emit('lowerCase')">Lower Case</button>
  </div>
</template>
<script>
export default {
  name: 'DynamicOne',
  props: ['firstName', 'lastName', 'title']
}
</script>