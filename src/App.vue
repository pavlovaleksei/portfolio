<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: { Main }
}
</script>

<style lang="sass">
  @import "style/main"
  @import url('https://fonts.googleapis.com/css?family=Varela+Round')
</style>
