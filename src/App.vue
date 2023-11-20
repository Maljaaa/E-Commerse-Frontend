<template>
  <div id="app">
    <login />
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    "login": Login,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}
</style>