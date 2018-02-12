<template>
  <div>
    <h1>Form Generator</h1>

    <form-generator :schema="schema"
                    v-model="formData">
    </form-generator>

    <br/> --
    <br/> {{formData}}
  </div>
</template>

<script>
import FormGenerator from '@/components/v5/FormGenerator'

export default {
  name: "FormsDemo",
  components: { FormGenerator },
  data() {
    return {
      formData: {
        firstName: 'Evan'
      },
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
        },
        {
          fieldType: "TextInput",
          placeholder: "First Name",
          label: "First Name",
          name: "firstName",
        },
        {
          fieldType: "TextInput",
          placeholder: "Last Name",
          label: "Last Name",
          name: "lastName"
        },
        {
          fieldType: "NumberInput",
          placeholder: "Age",
          name: "age",
          label: "Age",
          minValue: 0
        }
      ]
    };
  }
};
</script>
