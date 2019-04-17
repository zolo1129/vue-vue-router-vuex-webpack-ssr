<template lang="pug">
  transition(
    name="fade"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  )
    .notification(
      :style="style"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    )
      span.content {{content}}
      a.btn(@click="handleClose") {{btn}}
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {
    style() {
      return {}
    }
  },
  methods: {
    handleClose(e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('leave')
    },
    afterEnter() {},
    createTimer() {},
    clearTimer() {}
  }
}
</script>

<style lang="sass" scoped>
.notification
  width: 300px
  height: 80px
  background: #333
  border-radius: 4px
  box-shadow: 0 0 6px rgba(0, 0, 0, .6)
  color: #fff
  display: flex
  justify-content: space-between
  align-items: center
  transition: all .5s
  .content,
  .btn
    padding: 0 10px
  .btn
    color: #ff1111
    cursor: pointer
</style>


