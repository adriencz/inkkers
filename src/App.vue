<template>
  <div id="app" class="ui container grid">
    <Header></Header>
    <div class="ui four wide column">
      <Menu></Menu>
    </div>
    <div class="ui twelve wide column view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'

export default {
  components: { Header, Menu, },
}
</script>

<style>
@font-face {
  font-family: 'cool';
  src: url('/fonts/coolvetica_rg.ttf');
}
#app {
  font-family: 'cool', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 130px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}




</style>
