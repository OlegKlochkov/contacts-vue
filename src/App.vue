<template>
  <HeaderElement />
  <router-view />
<!--   <img
    v-if="darkTheme"
    src="./assets/sun.png"
    alt="themeToggle"
    class="ThemeToggleButton"
    @click="changeTheme"
  /> -->
  <button class="ThemeToggleButton"
    @click="changeTheme"/>
</template>

<script>
import HeaderElement from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderElement,
  },
  data(){
    return{
      darkTheme: document.documentElement.getAttribute('data-theme') === 'light' ? false : true
    }
  },
  mounted() {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  },
  methods: {
    changeTheme() {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }
      this.darkTheme = !this.darkTheme;
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 24px;
}

p {
  font-size: 16px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.InputComponent p {
  font-size: 24px;
}

.InputComponent input {
  font-size: 20px;
  width: 30%;
  max-width: 200px;
  min-width: 150px;
}

.InvalidInput input {
  border-color: red;
}

.ThemeToggleButton {
  position: absolute;
  bottom: 10%;
  right: 10%;
  background: url("./assets/moon.png") no-repeat center;
  border: none;

  width: 32px;
  height: 32px;
  
  cursor: pointer;
}

[data-theme="dark"] #app {
  background: black;
  color: white;
}
[data-theme="dark"] nav a {
  color: white;
}

[data-theme="dark"] .ThemeToggleButton{
  background: url("./assets/sun.png") no-repeat center;
}
</style>
