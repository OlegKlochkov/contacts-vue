<template>
  <div class="ContactInfoPage">
    <div class="ContactInfo">
      <h2>{{ contact.name }}</h2>
      <router-link :to="`/contacts/edit/${contact.id}`">Edit</router-link>
    </div>
    <div class="ContactSocial" v-if="contact.phone">
      <h3>Phone number:</h3>
      <h3>{{ contact.phone }}</h3>
    </div>
    <div
      class="ContactSocial"
      v-for="media in Object.entries(contact.socialMedia).filter((el) => el[1])"
      :key="media"
    >
      <h3>{{ media[0] }}:</h3>
      <h3>{{ media[1] }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsList",
  components: {},
  props: {},
  data() {
    //State
    return {
      contacts: this.$store.getters.getContacts,
      contact: this.$store.getters.getContacts.filter((contact) => contact.id === parseInt(this.$route.params.id))[0],
    };
  },
  mounted() {
    //useEffect
  },
  methods: {},
  computed: {
    //useMemo; перерисовка 1 компонента, а не ререндер всей страницы при изменении State
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContactInfoPage {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid black;
}

.ContactInfo,
.ContactSocial {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 64px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.ContactInfo {
  height: 64px;
}

.ContactSocial {
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>