<template lang="pug">
  #app
    .cover
    Header
    // p Vuex: {{counter}}
    // p Vuex_fullname: {{fullName}}
    // p vuex_modules_a: {{textA}} - {{textPlus}}
    // p vuex_modules_b: {{textB}}
    // p vuex_modules_c: {{textC}}
    //- Todo
    // router-link(:to="{name: 'app'}") app |
    // router-link(to="/login")  login |
    //- router-link(to="/app/123")  app/123
    transition(name="fade")
      router-view
    // button(@click="notify") notify
    Footer
    // router-view(name="a")
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './views/layout/header.vue'
// import Todo from './views/todo/todo.vue'
import Footer from './views/layout/footer.jsx'
import { setInterval } from 'timers';

export default {
  components: {
    Header,
    // Todo,
    Footer
  },
  mounted() {
    console.log(this.$store)
    this.updateCountAsync({
      num: 11,
      time: 3000
    })
    this['a/updateText']('aaaa')
    this['a/add']()
    this['b/textAction']()
    // this.$store.state.count = 5
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)

    // this.$notify({
    //   content: 'test notify test notify test notify test notify',
    //   btn: 'close'
    // })
  },
  methods: {
    ...mapMutations(['updateCount', 'a/updateText']),
    ...mapActions(['updateCountAsync', 'a/add', 'b/textAction']),
    notify() {
      this.$notify({
        content: 'test notify test notify test notify test notify',
        btn: 'close'
      })
    }
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // textB () {
    //   return this.$store.state.b.text
    // },
    ...mapState({
      // counter: 'count'
      counter: (state) => state.count,
      textA: (state) => state.a.text,
      textB: (state) => state.b.text
    }),
    // count() {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    })
    // fullName() {
    //   return this.$store.getters.fullName
    // }
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
