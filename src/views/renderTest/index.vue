<script>
export default {
  data() {
    return {
      isRed: true
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: {
          'is-red': this.isRed
        }
      },
      [h('p', '这是一个 render 事例')]
    )
  }
}
</script>

<style>
.is-red {
  color: red;
}
</style>
