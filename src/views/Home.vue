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
    <!--  -->
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
        { label: '子组件控制父组件的slot', to: '/controlSlot' },
        { label: 'Map类型', to: '/mapType' },
        { label: 'rander 函数', to: '/render' },
        { label: '自动保存表单', to: '/saveForm' },
        { label: 'keep-alive 组件', to: '/keepAlive' },
        { label: '练习 Promise', to: '/promise' }
      ]
    }
  },
  mounted() {
    // const arr = [1, 1, 2, 2, 3, 1]
    // console.log(this.unique(arr))
    // console.log(Array.from(new Set(arr)))
    // console.log(this.dataType(123, 'Number'))
    // const add = function add(x) {
    //   return function(y) {
    //     return x + y
    //   }
    // }
    // const add1 = add(3)
    // const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    // console.log(this.removeDuplicates(arr))
    const arr = [0, 1, 2, 2, 3, 0, 4, 2]
    console.log(this.removeElement(arr, 2))
  },
  methods: {
    removeElement(nums, val) {
      for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
          nums.splice(i, 1)
          i--
        }
      }
      return nums.length
    },
    unique(arr) {
      if (arr instanceof Array) return
      let list = []
      let obj = {}
      for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
          list.push(arr[i])
          obj[arr[i]] = true
        }
      }
      return list
    },
    dataType(tat, type) {
      const dataType = Object.prototype.toString.call(tat).slice(8, -1)
      return dataType === type ? true : false
    },
    removeDuplicates(nums) {
      var count = 0
      var n = nums.length
      for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
          nums[i - count] = nums[i]
        } else {
          count++
        }
      }
      return n - count
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
