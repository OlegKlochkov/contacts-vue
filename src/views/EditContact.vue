<template>
  <div class="EditContact">
    <div class="EditContactHeader">
      <img class="EditContactButton" src="../assets/save.png" alt="save changes" @click="editContact"/>
    </div>
    <InputComponent
      class="InputComponent"
      placeholder="ФИО"
      label="Имя:"
      type="text"
      :value="computedContact.name"
      @updateInput="contact.name = $event"
    />
    <InputComponent
      class="InputComponent"
      placeholder="+7(___)-___-__-__"
      label="Телефон:"
      type="text"
      :value="computedContact.phone"
      @updateInput="contact.name = $event"
    />
    <InputComponent
      class="InputComponent"
      placeholder="example"
      label="ВК:"
      type="text"
      :value="computedContact.socialMedia.vk"
      @updateInput="contact.socialMedia.vk = $event"
    />
    <InputComponent
      class="InputComponent"
      placeholder="example#1234"
      label="Дискорд:"
      type="text"
      :value="computedContact.socialMedia.discord"
      @updateInput="contact.socialMedia.discord = $event"
    />
    <InputComponent
      class="InputComponent"
      placeholder="@example"
      label="Телеграм:"
      type="text"
      :value="computedContact.socialMedia.telegram"
      @updateInput="contact.socialMedia.telegram = $event"
    />
    <InputComponent
      class="InputComponent"
      placeholder="username"
      label="Github:"
      type="text"
      :value="computedContact.socialMedia.github"
      @updateInput="contact.socialMedia.github = $event"
    />
  </div>
</template>

<script>
import InputComponent from "../components/Input.vue";

export default {
  name: "EditContact",
  components: {
    InputComponent,
  },
  props: {},
  data() {
    //State
    return {
      contact: this.$store.getters.getContacts.filter(
        (contact) => contact.id === parseInt(this.$route.params.id)
      )[0],
    };
  },
  mounted() {},
  methods: {
    editContact() {
      this.$store.dispatch("editContact_action", this.contact);
      this.$router.go(-1);
    },
  },
  computed: {
    computedContact() {
      return this.$store.getters.getContacts.filter(
        (contact) => contact.id === parseInt(this.$route.params.id)
      )[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.EditContact {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-top: 1px solid black;
}
.EditContact h2 {
  width: 40%;
}

.EditContactHeader{
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.EditContactHeader, .EditContactHeader *{
  padding: 0;
}

.EditContactButton{
  padding: 2%;
}

.InputComponent {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 64px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.InvalidInput {
  position: relative;

  padding-bottom: 10%;
}

.InvalidInput ::after {
  content: "Неправильный формат ввода";
  color: red;
  position: absolute;
  bottom: 0%;
  right: 0%;
  font-size: 12px;
}

@media screen and (max-width: 550px){
  .EditContact {
  width: 90%;
  }
}

[data-theme='dark'] .EditContactButton{
  filter: invert(100%);
}

[data-theme='dark'] .EditContact{
  border-top: 1px solid white;
}

[data-theme='dark'] .InputComponent{
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
</style>