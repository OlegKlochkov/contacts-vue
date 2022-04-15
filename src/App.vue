<template>
  <ContactsList />
</template>

<script>
import ContactsList from './components/ContactsList.vue';

export default {
  name: 'App',
  components: {
    ContactsList
  }
}
</script>

<style>
*{
  margin: 0;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
