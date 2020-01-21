<template>
  <div class="home">
    <div class="head width-100 height-60-px line-height-60-px b-text-cen">
      <h3 class="priamy-color">2020-01-21</h3>
    </div>
    <div class="width-100 height-60-px mb-20"></div>
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 22 }"
        :sm="{ span: 20 }"
        :md="{ span: 16 }"
        :lg="{ span: 14 }"
        :xl="{ span: 12 }"
      >
        <div class="nav width-100 height-40-px b-flex">
          <div
            v-for="item in navs"
            :key="item.value"
            class="height-100 line-height-40-px b-f-justify-cen b-text-cen width-100"
          >
            <span>{{ item.label }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      navs: [
        { label: "主页", value: 1 },
        { label: "主页", value: 2 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  .head {
    position: fixed;
    top: 0;
    right: 0;
    box-shadow: 0px 6px 12px -4px rgba(144, 147, 153, 0.8);
  }
}
</style>
