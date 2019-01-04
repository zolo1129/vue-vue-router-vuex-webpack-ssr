import '../assets/styles/footer.sass'

export default {
  data() {
    return {
      author: 'CaCO3'
    }
  },
  render() {
    return (
      <footer class="footer">by {this.author}</footer>
    )
  }
}