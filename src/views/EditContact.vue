<template>
    <div class="AddContact" style="border: 1px solid black">
      <h2>Добавить контакт:</h2>
      <InputComponent class="InputComponent"
        placeholder="ФИО"
        label="Имя:"
        type="text"
        :value="computedContact.name"
        @updateInput="contact.name = $event"
      />
      <InputComponent class="InputComponent"
        placeholder="+7(___)-___-__-__"
        label="Телефон:"
        type="text"
        :value="computedContact.phone"
        @updateInput="contact.name = $event"
      />
      <InputComponent class="InputComponent"
        placeholder="example"
        label="ВК:"
        type="text"
        :value="computedContact.socialMedia.vk"
        @updateInput="contact.socialMedia.vk = $event"
      />
      <InputComponent class="InputComponent"
        placeholder="example#1234"
        label="Дискорд:"
        type="text"
        :value="computedContact.socialMedia.discord"
        @updateInput="contact.socialMedia.discord = $event"
      />
      <InputComponent class="InputComponent"
      placeholder="@example"
        label="Телеграм:"
        type="text"
        :value="computedContact.socialMedia.telegram"
        @updateInput="contact.socialMedia.telegram = $event"
      />
      <InputComponent class="InputComponent"
        placeholder="username"
        label="Github:"
        type="text"
        :value="computedContact.socialMedia.github"
        @updateInput="contact.socialMedia.github = $event"
      />
      <button
        class="AddContactButton"
        @click="editContact"
      >
        Изменить
      </button>
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
      contact: this.$store.getters.getContacts.filter((contact) => contact.id === parseInt(this.$route.params.id))[0]
    };
  },
  mounted() {
  },
  methods: {
      editContact(){
          this.$store.dispatch('editContact_action', this.contact);
          this.$router.go(-1);
      }
  },
  computed: {
      computedContact(){
          return this.$store.getters.getContacts.filter((contact) => contact.id === parseInt(this.$route.params.id))[0];
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  border: 1px solid black;
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