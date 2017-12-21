<template>
  <div id="app">
    <idxHead></idxHead>
  </div>
</template>

<script>
import idxHead from "./components/head";
export default {
  name: "app",
  components: {
    idxHead
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
