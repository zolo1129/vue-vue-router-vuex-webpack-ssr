<template lang="pug">
  #app
    .cover
    Header
    Todo
    Footer
</template>

<script>
import Header from './views/layout/header.vue'
import Todo from './views/todo/todo.vue'
import Footer from './views/layout/footer.jsx'

export default {
  components: {
    Header,
    Todo,
    Footer
  }
}
</script>

<style lang="sass" scoped>
#app,
.cover
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
.cover
  background-color: rgba(255, 255, 255, .4)
  pointer-events: none
</style>
