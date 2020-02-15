<template>
  <div class="container width-100 b-flex b-f-align-stretch">
    <div class="left width-50 b-flex b-f-wrap">
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
    <div class="right width-50 b-flex b-f-align-cen">
      <div class="show width-100">
        <div class="one-line width-100 b-flex b-f-justify-cen">
          <div class="show-top base-div" ref="showTop"></div>
        </div>
        <div class="tow-line width-100 b-flex b-f-justify-cen">
          <div class="show-left base-div" ref="showLeft"></div>
          <div
            class="show-center base-div b-flex b-f-justify-cen b-f-align-cen"
          >
            <span>月</span>
          </div>
          <div class="show-right base-div" ref="showRight"></div>
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
      xPum: 0,
      yPum: 0,
      dw: "",
      dh: "",
      clientWidth: "", // 浏览器宽度
      clientHeight: "" // 浏览器高度
    };
  },
  mounted() {
    this.clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.clientHeight =
      window.innerHeight ||
      document.documentElement.innerHeight ||
      document.body.innerHeight;
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
      if (this.nx < 0) {
        this.xPum = 0;
      } else if (this.nx > this.clientWidth - this.dw - 10) {
        this.xPum = this.clientWidth - this.dw - 6;
      } else {
        this.xPum = this.dx + this.nx;
      }
      if (this.ny < 0) {
        this.yPum = 0;
      } else if (this.ny > this.clientHeight - this.dh - 10) {
        this.yPum = this.clientHeight - this.dh - 6;
      } else {
        this.yPum = this.dy + this.ny;
      }
    },
    end() {
      if (
        this.yPum > this.$refs.showTop.offsetTop &&
        this.yPum < this.$refs.showTop.offsetTop + this.dh &&
        this.xPum > this.$refs.showTop.offsetLeft &&
        this.xPum < this.$refs.showTop.offsetLeft + this.dw
      ) {
        this.xPum = this.$refs.showTop.offsetLeft;
        this.yPum = this.$refs.showTop.offsetTop;
      } else if (
        this.yPum > this.$refs.showBottom.offsetTop &&
        this.yPum < this.$refs.showBottom.offsetTop + this.dh &&
        this.xPum > this.$refs.showBottom.offsetLeft &&
        this.xPum < this.$refs.showBottom.offsetLeft + this.dw
      ) {
        this.xPum = this.$refs.showBottom.offsetLeft;
        this.yPum = this.$refs.showBottom.offsetTop;
      } else if (
        this.yPum > this.$refs.showLeft.offsetTop &&
        this.yPum < this.$refs.showLeft.offsetTop + this.dh &&
        this.xPum > this.$refs.showLeft.offsetLeft &&
        this.xPum < this.$refs.showLeft.offsetLeft + this.dw
      ) {
        this.xPum = this.$refs.showLeft.offsetLeft;
        this.yPum = this.$refs.showLeft.offsetTop;
      } else if (
        this.yPum > this.$refs.showRight.offsetTop &&
        this.yPum < this.$refs.showRight.offsetTop + this.dh &&
        this.xPum > this.$refs.showRight.offsetLeft &&
        this.xPum < this.$refs.showRight.offsetLeft + this.dw
      ) {
        this.xPum = this.$refs.showRight.offsetLeft;
        this.yPum = this.$refs.showRight.offsetTop;
      } else {
        this.xPum = 0;
        this.yPum = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  border: 1px dashed #aaa;
  overflow: hidden;
  // margin-top: 10vh;
  // margin-left: 10%;
  .left {
    width: 100%;
    position: relative;
    .single-text {
      width: 20%;
      font-size: 26px;
      background: yellow;
      position: absolute;
      z-index: 999;
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
  }
  .right {
    background: #eee;
    .show {
      .base-div {
        width: 20%;
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
          font-size: 26px;
        }
      }
    }
  }
}
</style>
