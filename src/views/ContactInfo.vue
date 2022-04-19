<template>
  <div class="ContactsList">
    <div class="CurrentContacts">
      <div
        v-for="(contact, index) in computedContacts"
        :key="index"
        :class="{ ContactsListItem: true }"
      >
        <div class="ContactInfo">
          <h2>{{ contact.name }}</h2>
          <router-link :to="`/contacts/edit/${contact.id}`">Edit</router-link>
        </div>
        <div class="ContactSocial">
          <h3>Phone number:</h3>
          <h3>{{ contact.phone }}</h3>
        </div>
        <div
          class="ContactSocial"
          v-for="media in Object.entries(contact.socialMedia)"
          :key="media"
        >
        <h3>{{ media[0] }}:</h3>
        <h3>{{ media[1] }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsList",
  components: {
  },
  props: {},
  data() {
    //State
    return {
      contactId: this.$route.params.id,
      contacts: this.$store.getters.getContacts
    };
  },
  mounted() {
    //useEffect
  },
  methods: {
  },
  computed: {
    //useMemo; перерисовка 1 компонента, а не ререндер всей страницы при изменении State
    computedContacts() {
        return this.contacts.filter((contact) => contact.id === parseInt(this.contactId));
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  border: 1px solid black;
}
.ContactsList {
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.CurrentContacts{
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;
  overflow-x: hidden;
}

.ContactsListItem{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.ContactInfo, .ContactSocial{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.ContactInfo{
  height: 64px;
}

.ContactSocial{
  width: 95%;
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>