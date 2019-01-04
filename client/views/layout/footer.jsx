import '../../assets/styles/footer.sass'

export default {
  data () {
    return {
      author: 'CaCO3'
    }
  },
  render () {
    return (
      <div class="footer">
        <span>by {this.author}</span>
      </div>
    )
  }
}
