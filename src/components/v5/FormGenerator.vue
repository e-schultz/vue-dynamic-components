<template>
  <div>
    <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               :value="formData[field.name]"
               @input="updateForm(field.name, $event)"
               v-bind="field">
    </component>
  </div>
</template>

<script>
import NumberInput from '@/components/v5/NumberInput'
import SelectList from '@/components/v5/SelectList'
import TextInput from '@/components/v5/TextInput'
export default {
  name: "FormGenerator",
  components: { NumberInput, SelectList, TextInput },
  props: ['schema', 'value'],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit('input', this.formData)
    }
  }
};
</script>
