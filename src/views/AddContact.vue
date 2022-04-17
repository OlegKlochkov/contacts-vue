<template>
    <div class="AddContact" style="border: 1px solid black">
      <h2>Добавить контакт:</h2>
      <InputComponent class="InputComponent"
        v-bind:class="{InvalidInput: !validName, InputComponent}"
        placeholder="ФИО"
        label="Имя:"
        type="text"
        @updateInput="contact.name = $event"
      />
      <InputComponent class="InputComponent"
        v-bind:class="{InvalidInput: !validPhone, InputComponent}"
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
      <button
        class="AddContactButton"
        @click="$store.dispatch('addContact_action', contact)"
      >
        Добавить
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
      validPhone: true,
    };
  },
  mounted() {
    //useEffect
  },
  methods: {
  },
  computed: {
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