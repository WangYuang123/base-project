<template>
  <div>
    <h2>练习 keep-alicve 组件的使用</h2>
    <router-link to="/keepAlive/son1">
      <span style="font-size: 20px; color: red;">son1</span>
    </router-link>
    <router-link to="/keepAlive/son2">
      <span style="font-size: 20px; color: red;">&nbsp;&nbsp;&nbsp;son2</span>
    </router-link>
    <router-view></router-view>
    <!-- <keep-alive>
      
    </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'keepAlive',
  mounted() {
    console.log(this.searchInsert([1, 3, 5, 6], 0))
    // console.log('okkk')
  },
  methods: {
    searchInsert(nums, target) {
      const index = nums.findIndex(item => item === target)
      if (index != -1) {
        return index
      } else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        const index2 = nums.findIndex(item => item === target)
        return index2
      }
    }
  }
}
</script>

<style></style>
