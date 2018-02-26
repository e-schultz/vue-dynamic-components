<template>
  <div>
    <label>{{label}}</label>
    <input type="text"
           :name="name"
           :placeholder="placeholder">
  </div>
</template>
<script>
export default {
  name: 'TextInput',
  props: ['placeholder', 'label', 'name']
}
</script>