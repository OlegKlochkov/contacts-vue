<template>
  <div class="ContactsList">
    <InputComponent
      id="filterInput"
      placeholder="Поиск"
      type="text"
      @updateInput="searchQuery = $event"
    />
    <div class="CurrentContacts">
      <div
        v-for="(contact, index) in computedContacts"
        :key="index"
        :class="{ ContactsListItem: true }"
      >
        <div
          class="ContactInfo"
          @click="$router.push(`/contacts/${contact.id}`)"
        >
          <h2>{{ contact.name }}</h2>
          <img class="DeleteButton" src="../assets/delete.png" alt="delete" @click.stop="$store.dispatch('deleteContact_action', contact.id)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/Input.vue";

export default {
  name: "ContactsList",
  components: {
    InputComponent,
  },
  props: {},
  data() {
    //State
    return {
      searchQuery: "",
    };
  },
  mounted() {
    //useEffect
  },
  methods: {},
  computed: {
    //useMemo; перерисовка 1 компонента, а не ререндер всей страницы при изменении State
    computedContacts() {
      let searchResult = this.$store.getters.getContacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      return searchResult.sort((a, b) => a.name[0].toLowerCase() > b.name[0].toLowerCase());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.ContactsList {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

#filterInput {
  width: 100%;
  height: 32px;
  margin-bottom: 2%;
}

.CurrentContacts {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-height: 80vh;

  overflow-y: auto;
}

.CurrentContacts ::-webkit-scrollbar {
  /* chrome based */
  display: none;
  width: 0px;
  height: 0px;
}

.ContactsListItem {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.ContactInfo,
.ContactSocial {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.ContactInfo {
  height: 64px;
}

.ContactSocial {
  width: 95%;
  padding-top: 1%;
  padding-bottom: 1%;
}

.DeleteButton{
  margin: 1%;
  cursor: pointer;
}

@media screen and (max-width: 550px){
  .ContactsList {
  width: 90%;
  }
}
</style>

<style>
#filterInput p{
  display: none;
}

#filterInput input ::placeholder{
  color: black;
  font-size: 20px;
}

#filterInput input{
  width: calc(100% - 32px);
  height: 32px;
  border-radius: 10px;

  background: url("../assets/search.png") left no-repeat;
  padding-left: 26px;

  color: black;
  font-size: 20px;
}
</style>