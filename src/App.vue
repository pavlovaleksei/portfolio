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
</style>
