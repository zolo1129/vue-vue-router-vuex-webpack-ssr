<script lang="jsx">
import TabContainer from './vue-container.vue'

export default {
  name: 'Tabs',
  components: {
    TabContainer
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      panes: []
    }
  },
  methods: {
    onChange(index) {
      this.$emit('change', index)
    }
  },
  render() {
    return (
      <div class='tabs'>
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <TabContainer panes={this.panes}></TabContainer>
      </div>
    )
  }
}
</script>

<style lang="sass">
.tabs-header
  display: flex
  border-bottom: 2px solid #eee
  margin: 0
  padding: 0
</style>

