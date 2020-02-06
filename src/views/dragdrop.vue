<template>
  <div class="container width-100 b-flex b-f-align-stretch">
    <div class="left width-60 b-flex b-f-wrap">
      {{ xPum }}-{{ yPum }}
      <div
        v-for="item in texts"
        :key="item.value"
        draggable="true"
        class="single-text  b-flex b-f-justify-cen b-f-align-cen"
        @touchstart.stop="down($event, item.value)"
        @touchmove.prevent="move"
        @touchend="end"
        :style="`top: ${yPum}px;left: ${xPum}px`"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right width-40 b-flex b-f-align-cen">
      <div class="show width-100">
        <div class="one-line width-100 b-flex b-f-justify-cen">
          <div class="show-top base-div" ref="showTop"></div>
        </div>
        <div class="tow-line width-100 b-flex b-f-justify-cen">
          <div class="show-left base-div"></div>
          <div
            class="show-center base-div b-flex b-f-justify-cen b-f-align-cen"
          >
            <span>月</span>
          </div>
          <div class="show-right base-div"></div>
        </div>
        <div class="one-line width-100 b-flex b-f-justify-cen">
          <div class="show-bottom base-div" ref="showBottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [{ name: "凡", value: "fan" }],
      curValue: "",
      flags: false,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: 20,
      yPum: 20,
      dw: "",
      dh: "",
      showTop: { x: "", y: "" },
      showBottom: { x: "", y: "" },
      showLeft: { x: "", y: "" },
      showRight: { x: "", y: "" }
    };
  },
  mounted() {
    // 求出top区域范围
    console.log(this.$refs.showTop.offsetTop);
    // this.showTop.y = this.getElementToPageTop(this.$refs.showTop);
    // this.showTop.x = this.getElementToPageLeft(this.$refs.showTop);
    // console.log(this.showTop)
  },
  methods: {
    down(event, value) {
      const touch = event.touches[0];
      this.position.x = touch.clientX; // 鼠标点击起始位置x
      this.position.y = touch.clientY; // 鼠标点击起始位置y
      this.curValue = value;
      this.dx = event.target.offsetLeft; // div距离左侧距离
      this.dy = event.target.offsetTop; // div距离上侧距离
      this.dw = event.target.offsetWidth;
      this.dh = event.target.offsetHeight;
    },
    move(event) {
      const touch = event.touches[0];
      this.nx = touch.clientX - this.position.x;
      this.ny = touch.clientY - this.position.y;
      this.xPum = this.dx + this.nx;
      this.yPum = this.dy + this.ny;
    },
    end() {
      if (
        this.yPum > this.$refs.showTop.offsetTop &&
        this.yPum < this.$refs.showTop.offsetTop + this.dh &&
        this.xPum > this.$refs.showTop.offsetLeft &&
        this.$refs.showTop.offsetLeft + this.dh
      ) {
        this.xPum = this.$refs.showTop.offsetLeft;
        this.yPum = this.$refs.showTop.offsetTop;
      } else {
        this.xPum = 20
        this.yPum =  20
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  border: 1px dashed #aaa;
  // margin-top: 10vh;
  // margin-left: 10%;
  .left {
    width: 100%;
    position: relative;
    .single-text {
      width: 80px;
      height: 80px;
      font-size: 26px;
      background: yellow;
      position: absolute;
      z-index: 999;
    }
  }
  .right {
    background: #eee;
    .show {
      .base-div {
        width: 25%;
        border: 1px dashed #aaa;
        &::before {
          content: "";
          padding-top: 100%;
          float: left;
        }
        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .tow-line {
        .show-center {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
