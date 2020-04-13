<template>
  <div id="app">
    <HeaderBar navigationTitle="Jakob Andersson"/>
    <body>
      <p>This is in App</p>
      <p>Lipsum lipsum etc.</p>
    </body>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
