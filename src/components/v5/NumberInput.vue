<template>
  <div>
    <label>{{label}}</label>
    <input type="number"
           :name="name"
           :value="value"
           @input="$emit('input',
           $event.target.value)"
           :placeholder="placeholder">
  </div>
</template>
<script>
export default {
  name: 'NumberInput',
  props: ['placeholder', 'label', 'name', 'value']
}
</script>