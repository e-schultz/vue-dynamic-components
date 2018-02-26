<template>
  <div>
    <label>{{label}}</label>
    <input type="number"
           :name="name"
           :placeholder="placeholder">
  </div>
</template>
<script>
export default {
  name: 'NumberInput',
  props: ['placeholder', 'label', 'name']
}
</script>