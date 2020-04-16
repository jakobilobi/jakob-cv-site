<template>
  <div id="app">
    <HeaderBar navigationTitle="Jakob Andersson"/>
    <body>
      <!-- replace with component -->
      <p>This is in App</p>
      <p>Lipsum lipsum etc.</p>
    </body>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HeaderButton from './components/HeaderButton.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar
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
  margin-bottom: 0px;
}

/* temporary */
body {
  height: 400px;
}

</style>
