<template>
  <div id="app">
    <MainMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: { MainMenu }
}
</script>

<style lang="sass">
  @import "style/main"
  @import url('https://fonts.googleapis.com/css?family=Varela+Round')

  #app
    font-family: 'Varela Round', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
</style>
