<template>
  <nav class="HeaderElement" v-if="route === '/'">
    <h1 v-if="route === '/'">Contacts</h1>
    <router-link to="/add" v-if="route === '/'">+</router-link>
  </nav>

  <nav
    class="HeaderElement"
    v-else-if="route.includes('/contacts/') && !route.path.includes('edit')"
  >
    <router-link to="/">
      <img src="" alt="backImg" />
      <h2>Contacts</h2>
    </router-link>
    <router-link :to="`/contacts/edit/${$route.params.id}`"> Edit </router-link>
  </nav>

  <nav class="HeaderElement" v-else-if="route === '/add'">
    <router-link @click="$router.go(-1)"> Cancel </router-link>
    <h2>Add Contact</h2>
  </nav>

  <nav
    class="HeaderElement"
    v-else-if="route.includes('/contacts/') && route.path.includes('edit')"
  >
    <router-link @click="$router.go(-1)"> Cancel </router-link>
    <h2>Edit Contact</h2>
  </nav>
</template>

<script>
export default {
  name: "HeaderElement",
  data() {
    return {
      route: this.$route.path,
    };
  },
};
</script>

<style scoped>
</style>