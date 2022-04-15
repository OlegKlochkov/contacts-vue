<template>
  <div class="ContactsList">
    <div class="CurrentContacts">
      <div
        v-for="(contact, index) in $store.getters.getContacts"
        :key="index"
        :class="{ ContactsListItem: true }"
      >
        <div class="ContactInfo" @click="contact.fullyVisible = !contact.fullyVisible">
          <h2>{{ contact.name }}</h2>
          <h2>{{ contact.phone }}</h2>
        </div>
        <div
          class="ContactSocial"
          v-for="media in Object.entries(contact.socialMedia)"
          :key="media"
          :style="contact.fullyVisible ? 'visibility: initial;' : 'visibility: collapse'"
        >
        <h3>{{ media[0] }}:</h3>
        <h3>{{ media[1] }}</h3>
        </div>
      </div>
    </div>
    <div class="AddContact" style="border: 1px solid black">
      <h2>Добавить контакт:</h2>
      <InputComponent class="InputComponent"
        v-bind:class="{InvalidInput: !validName, InputComponent}"
        placeholder="ФИО"
        label="Имя:"
        type="text"
        @updateInput="contact.name = name"
      />
      <InputComponent class="InputComponent"
        v-bind:class="{InvalidInput: !validPhone, InputComponent}"
        placeholder="+7(___)-___-__-__"
        label="Телефон:"
        type="text"
        @updateInput="contact.phone = phone"
      />
      <InputComponent class="InputComponent"
        placeholder="example"
        label="ВК:"
        type="text"
        @updateInput="contact.socialMedia.vk = $event"
      />
      <InputComponent class="InputComponent"
        placeholder="example#1234"
        label="Дискорд:"
        type="text"
        @updateInput="contact.socialMedia.discord = $event"
      />
      <InputComponent class="InputComponent"
      placeholder="@example"
        label="Телеграм:"
        type="text"
        @updateInput="contact.socialMedia.telegram = $event"
      />
      <InputComponent class="InputComponent"
        placeholder="username"
        label="Github:"
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
          telegram: "",
          github: "",
        },
        fullyVisible: false
      },
      validName: true,
      validPhone: true
    };
  },
  mounted() {
    //useEffect
  },
  methods: {
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
*{
  border: 1px solid black;
}
.ContactsList {
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

.AddContact{
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.AddContact h2{
  width: 100%;
}

.AddContact *{
  padding-top: 4%;
  padding-bottom: 4%;
}

.InputComponent{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding-top: 2%;
  padding-bottom: 2%;
}

.InvalidInput{
  position: relative;

  padding-bottom: 10%;
}

.InvalidInput ::after{
  content: 'Неправильный формат ввода';
  color: red;
  position: absolute;
  bottom: 0%;
  right: 0%;
  font-size: 12px;
}
</style>

<style>
.InvalidInput input{
  border-color: red;
}
</style>