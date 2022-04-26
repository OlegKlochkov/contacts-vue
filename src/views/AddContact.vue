<template>
    <div class="AddContact">
      <div class="AddContactHeader">
        <h2>Добавить контакт:</h2>
        <img src="../assets/delete.png"
        alt="Add"
        class="AddContactButton"
        @click="addContact"
      />
      </div>
      <InputComponent class="InputComponent"
        :class="{InvalidInput: contact.name === ''}"
        placeholder="ФИО"
        label="Имя:"
        type="text"
        :value="contact.name"
        @updateInput="contact.name = $event.trim();"
      />
      <InputComponent class="InputComponent"
        placeholder="+7(___)-___-__-__"
        label="Телефон:"
        type="text"
        @updateInput="contact.phone = $event"
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
    </div>
</template>

<script>
import InputComponent from "../components/Input.vue";

export default {
  name: "AddContact",
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
      },
    };
  },
  mounted() {
    //useEffect
  },
  methods: {
    addContact(){
      if(!this.contact.name){return;}
      this.$store.dispatch('addContact_action', this.contact);
      this.$router.push('/');
    }
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.AddContact{
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-top: 1px solid black;
}

.AddContactHeader{
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.AddContactHeader, .AddContactHeader *{
  padding: 0;
}

.AddContactHeader h2{
  width: 40%;
}

.AddContactButton{
  transform: rotate(45deg);
  padding: 2%;
}

.InputComponent{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  height: 64px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.InvalidInput{
  position: relative;
}

.InvalidInput ::after{
  content: 'Обязательное поле';
  color: red;
  position: absolute;
  bottom: 0%;
  right: 0%;
  font-size: 12px;
}
</style>