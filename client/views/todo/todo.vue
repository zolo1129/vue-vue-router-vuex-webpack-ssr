<template lang="pug">
  .app-todo
    .tab-container
      tabs(:value="filter" @change="handleChangeTab")
        tab(:label="tab" :index="tab" v-for="tab in states" :key="tab")
    input.app-input(
      type="text"
      placeholder="待办事项"
      autofocus="autofocus"
      @keyup.enter="addTodo"
    )
    Item(
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del='deleteTodo'
      @todoUpdate="todoUpdate"
    )
    Helper(
      :filter="filter"
      :todos="todos"
      @tab="filterTodo"
      @clearAllCompleted="clearAllComplete"
    )
    //- router-view
</template>

<script>
import Item from './item.vue'
import Helper from './help.vue'

let id = 0

export default {
  beforeRouteEnter(to, from, next) {
    console.log('todo route enter')
    next(vm => {
      console.log(vm.filter)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('todo route update')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('todo route leave')
    next()
  },
  props: ['id'],
  data() {
    return {
      todos: [],
      filter: '所有',
      states: ['所有', '未完成', '已完成']
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    filteredTodos() {
      if (this.filter === '所有') {
        return this.todos
      }
      const complete = this.filter === '已完成'
      return this.todos.filter(todo => complete === todo.complete)
    }
  },
  methods: {
    addTodo(e) {
      if (e.target.value.trim().length === 0) {
        this.$notify({
          content: '请输入内容'
        })
      } else {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          complete: false
        })
        e.target.value = ''
        this.$notify({
          content: '事件已添加'
        })
      }
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      this.$notify({
        content: '事件已删除'
      })
    },
    filterTodo(state) {
      this.filter = state
    },
    clearAllComplete() {
      this.todos = this.todos.filter(todo => todo.complete === false)
      this.$notify({
        content: '所有已完成事件已删除'
      })
    },
    handleChangeTab(value) {
      this.filter = value
    },
    todoUpdate(e) {
      if (e.target.checked) {
        this.$notify({
          content: '这件事做完了'
        })
      } else {
        this.$notify({
          content: '重做这件事'
        })
      }
    }
  },
  mounted() {
    // console.log(this.$route)
    // console.log(this.id)
  },
}
</script>

<style lang="sass" scoped>
.app-todo
  width: 700px
  margin: 0 auto 40px
  box-shadow: 0 0 5px #666
.app-input
  position: relative
  margin: 0
  width: 100%
  height: 40px
  font-size: 20px
  border: none
  padding: 0 24px 0 40px
  box-sizing: border-box
.app-input::-webkit-input-placeholder
  color: #ccc
.tab-container
  background: #fff
  padding: 0 20px
</style>


