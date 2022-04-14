<template>
  <div class="ContactsList">
    <div
      v-for="(contact, index) in $store.getters.getContacts"
      :key="index"
      :class="{ ContactsListItem: true }"
    >
      <p class="ContactInfo">{{ contact.name }}</p>
      <p class="ContactInfo">{{ contact.phone }}</p>
      <div
        class="ContactSocial"
        v-for="media in contact.socialMedia"
        :key="media"
      >
        {{ media }}
      </div>
    </div>
    <div class="addContact" style="border: 1px solid black">
      <p>Добавить контакт:</p>
      <InputComponent
        placeholder="Имя:"
        type="text"
        @updateInput="contact.name = $event"
      />
      <InputComponent
        placeholder="Телефон:"
        type="text"
        @updateInput="contact.phone = $event"
      />
      <InputComponent
        placeholder="ВК:"
        type="text"
        @updateInput="contact.socialMedia.vk = $event"
      />
      <InputComponent
        placeholder="Дискорд:"
        type="text"
        @updateInput="contact.socialMedia.discord = $event"
      />
      <InputComponent
        placeholder="Инстаграм:"
        type="text"
        @updateInput="contact.socialMedia.instagram = $event"
      />
      <InputComponent
        placeholder="Github:"
        type="text"
        @updateInput="contact.socialMedia.github = $event"
      />
      <button
        class="AddContactButton"
        @click="$store.dispatch('addContact_action', contact)"
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
import InputComponent from "./Input.vue";

export default {
  //@click="$store.dispatch('addContact_action', contact)"
  name: "ContactsList",
  components: {
    InputComponent,
  },
  props: {},
  data() {
    //State
    return {
      contact: {
        name: "",
        phone: "",
        socialMedia: {
          vk: "",
          discord: "",
          instagram: "",
          github: "",
        },
      },
    };
  },
  mounted() {
    //useEffect
  },
  methods: {
    //functions block
  },
  computed: {
    editArray() {
      //useMemo; перерисовка 1 компонента, а не ререндер всей страницы при изменении State
      return this.marks.filter((el) => el === 3);
    },
  },

  //marksItem:element === 4 эквивалентно if element === 4
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
