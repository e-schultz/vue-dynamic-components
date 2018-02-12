<template>
  <div>
    <label>{{label}}</label>

    <input type="text"
           :name="name"
           :value="value"
           @input="$emit('input',$event.target.value)"
           :placeholder="placeholder
           ">

  </div>
</template>
<script>
export default {
  name: 'TextInput',
  props: ['placeholder', 'label', 'name', 'value']
}
</script>