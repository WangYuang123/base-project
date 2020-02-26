<template>
  <div class="home">
    <div class="head width-100 height-60-px line-height-60-px b-text-cen">
      <h3 class="priamy-color">2020-01-21</h3>
    </div>
    <global></global>
    <div class="width-100 height-60-px mb-20"></div>
    <el-button v-permission="'10'">权限按钮</el-button>
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 22 }"
        :sm="{ span: 20 }"
        :md="{ span: 16 }"
        :lg="{ span: 14 }"
        :xl="{ span: 12 }"
      >
        <div class="nav width-100 height-40-px">
          <div v-for="(item, index) in navs" :key="index">
            <router-link
              :to="item.to"
              class="height-100 line-height-40-px width-100"
            >
              <span>{{ item.label }}</span>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      navs: [
        { label: '防抖节流', to: '/debounce' },
        { label: '拖拽拼接文字', to: '/dragdrop' },
        { label: 'vue-router解析流程', to: '/routerProcess' },
        { label: '练习vuex', to: '/vuex' },
        { label: '深拷贝', to: '/copy' },
        { label: '组件之间的通讯', to: '/transmit' },
        { label: 'Eventloop', to: '/eventloop' },
        { label: 'render编写template', to: '/randerTem' },
        { label: 'BFC', to: '/BFC' },
        { label: '子组件控制父组件的slot', to: '/controlSlot' }
      ]
    }
  },
  mounted() {
    // console.log(this.dataType(123, 'Number'))
    // const add = function add(x) {
    //   return function(y) {
    //     return x + y
    //   }
    // }
    // const add1 = add(3)
  },
  methods: {
    dataType(tat, type) {
      const dataType = Object.prototype.toString.call(tat).slice(8, -1)
      return dataType === type ? true : false
    }
  }
}
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
