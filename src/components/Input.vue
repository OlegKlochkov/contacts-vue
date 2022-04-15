<template>
  <label>
    <p>{{ label }}</p>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="$emit('updateInput', $event.target.value);"
    />
  </label>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    label: String,
    placeholder: String,
    type: String,
    value: String,
  },
};
</script>

<style>
</style>
