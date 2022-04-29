<template>
  <nav class="HeaderElement HeaderContacts" v-if="computedRoute.path === '/'">
    <h2>Контакты</h2>
    <router-link to="/add">
      <img class="AddButton" src="../assets/delete.png" alt="Add" style="transform: rotate(45deg)"/>
    </router-link>
  </nav>

  <nav class="HeaderElement" v-else-if="computedRoute.name === 'ContactInfo'">
    <router-link to="/">
      <img class="BackButton" src="../assets/back.png" alt="backImg" />
      <h2>Контакты</h2>
    </router-link>
  </nav>

  <nav class="HeaderElement" v-else-if="computedRoute.name === 'AddContact'">
    <router-link to="/">
      <img class="BackButton" src="../assets/back.png" alt="backImg" />
    </router-link>
    <h2>Добавить контакт</h2>
  </nav>

  <nav class="HeaderElement HeaderEdit" v-else-if="computedRoute.name === 'EditContact'">
    <router-link :to="`/contacts/${computedRoute.params.id}`">
      <img class="BackButton" src="../assets/back.png" alt="backImg" />
    </router-link>
    <h2>Редактирование</h2>
  </nav>
</template>

<script>
export default {
  name: "HeaderElement",
  computed: {
    computedRoute() {
      return this.$route;
    },
  },
};
</script>

<style scoped>
.HeaderElement{
  width: 70%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.HeaderElement a{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.HeaderContacts h2, .HeaderEdit h2{
  margin: 0 auto;
}

@media screen and (max-width: 550px){
  .HeaderElement {
  width: 100%;
  }
}

@media (prefers-color-scheme: dark){
  .AddButton{
    filter: invert(100%);
  }
  .BackButton{
    filter: invert(100%);
  }
}
</style>