<script lang="jsx">
export default {
  name: 'Tab',
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  mounted() {
    this.$parent.panes.push(this)
  },
  computed: {
    active() {
      return this.$parent.value === this.index
    }
  },
  methods: {
    handleClick() {
      this.$parent.onChange(this.index)
    }
  },
  render() {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      tab: true,
      active: this.active
    }
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    )
  }
}
</script>

<style lang="sass">
.tab
  list-style: none
  margin-right: 30px
  line-height: 50px
  cursor: pointer
  position: relative
  bottom: -2px
  &:last-child
    margin-right: 0
  &.active
    border-bottom: 2px solid blue
</style>

