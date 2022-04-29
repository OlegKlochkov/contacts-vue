<template>
  <HeaderElement />
  <router-view/>
</template>

<script>
import HeaderElement from './components/Header.vue';

export default{
  name: "App",
  components: {
    HeaderElement
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
}

*{
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
}

h1{
  font-size: 40px;
}

h2{
  font-size: 32px;
}

h3{
  font-size: 24px;
}

p{
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

@media (prefers-color-scheme: dark){
  #app{
    background: black;
    color: white;
  }
  nav a{
    color: white;
  }

  .InputComponent p{
    color: black;
  }
}
</style>
