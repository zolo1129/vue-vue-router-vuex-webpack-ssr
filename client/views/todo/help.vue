<template lang="pug">
  .helper
    .left {{unFinishedTodosLength}} 项剩余
    .tabs
      span(
        v-for="state in states"
        :key="state"
        :class="filter === state ? 'active' : ''"
        @click="toggleFilter(state)"
      ) {{state}}
    .right(@click="clearAllCompleted") 删除所有已完成事项
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ['所有', '未完成', '已完成']
    }
  },
  computed: {
    unFinishedTodosLength() {
      return this.todos.filter(todo => todo.complete === false).length
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('tab', state)
    },
    clearAllCompleted() {
      this.$emit('clearAllCompleted')
    }
  }
}
</script>

<style lang="sass" scoped>
.helper
  background-color: #fff
  height: 30px
  line-height: 30px
  padding: 5px 24px 5px 40px
  display: flex
  justify-content: space-between
.left
  float: left
.right
  float: right
  cursor: pointer
.tabs
  width: 240px
  span
    padding: 0 10px
    margin: 0 5px
    border: 1px solid rgba(175,47,47,0)
    display: inline-block
    cursor: pointer
    &.active
      border-color: rgba(175,47,47,0.4)
      border-radius: 5px
</style>
