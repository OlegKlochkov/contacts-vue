<template>
      <label>
        <p>{{placeholder}}</p>
        <input :type="type" :value="value" @input=";$emit('updateInput',$event.target.value)" />
      </label>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
      placeholder: String,
      type: String,
      value: String
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
