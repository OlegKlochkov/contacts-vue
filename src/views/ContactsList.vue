<template>
  <div class="ContactsList">
    <input type="text" v-model="searchQuery">
    <div class="CurrentContacts">
      <div
        v-for="(contact, index) in computedContacts"
        :key="index"
        :class="{ ContactsListItem: true }"
      >
        <div class="ContactInfo" @click="$router.push(`/contacts/${contact.id}`)">
          <h2>{{ contact.name }}</h2>
          <button @click.stop="$store.dispatch('deleteContact_action', contact.id)">Удалить контакт</button>
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
      searchQuery: ''
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
      let searchResult = this.$store.getters.getContacts.filter((contact) => contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return searchResult.sort((a, b) => a.name[0] > b.name[0]);
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