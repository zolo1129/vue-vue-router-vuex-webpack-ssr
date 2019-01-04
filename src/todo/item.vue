<template lang="pug">
  .todo-item(:class="todo.complete ? 'completed' : ''")
    input.toggle(
      type="checkbox"
      v-model="todo.complete"
    )
    label {{todo.content}}
    button.delete(@click="deleteTodo") 删除
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="sass" scoped>
.todo-item
  position: relative
  background-color: #fff
  font-size: 20px
  border-bottom: 1px solid #eee
  height: 40px
  line-height: 40px
  label
    white-space: pre-line
    word-break: break-all
    display: block
    transition: color 0.4s
    margin-left: 40px
    color: #666
  &.completed
    label
      color: #d9d9d9
      text-decoration: line-through
.toggle,
.delete
  position: absolute
  top: 50%
  transform: translateY(-50%)
.toggle
  width: 40px
  margin: 0
  left: 0
  text-align: center
  height: 40px
  border: none
  outline: none
  -webkit-appearance: none
  &:after
    content: ""
    display: block
    width: 40px
    height: 40px
    background: url(../assets/images/round.svg) no-repeat center
    background-size: 80% auto
  &:checked:after
    background: url(../assets/images/done.svg) no-repeat center
    background-size: 80% auto
.delete
  right: 24px
  width: 70px
  height: 30px
  border-radius: 4px
  outline: none
  cursor: pointer
</style>
