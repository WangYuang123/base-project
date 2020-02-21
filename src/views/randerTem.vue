<script>
export default {
  data() {
    return {
      type: "succes"
    };
  },
  render(h) {
    return h("button", {
      class: {
        btn: true,
        "btn-success": this.type === "succes",
        "btn-danger": this.type === "danger"
      },
      domProps: {
        innerText: "我是个按钮"
      },
      on: {
        click: this.handleClick
      }
    });
  },
  methods: {
    handleClick() {
      console.log("okkk");
    }
  }
};
</script>

<style scoped>
.btn-success {
  background: yellow;
}
.btn-danger {
  background: gray;
}
</style>
