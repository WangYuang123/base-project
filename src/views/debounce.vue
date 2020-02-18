<template>
  <div class="debounce">
    <div style="margin-bottom: 10px;">
      <el-button @click="debounceFun(456)">防抖函数</el-button>
    </div>
    <hr />
    <div style="margin-top: 10px">
      <div class="throlle" @scroll="throlleFun(456)">
        <p v-for="(item, index) in 100" :key="index + item">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
function debounce(fn, timeout = 1000) {
    let timer = null
    return () => {
        if(timer){
            clearTimeout(timer)
        } 
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
            timer = null
        }, timeout)
    }
}
function throlle(fn, timeout = 1000) {
  let timer = null;
  return (...args) => {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, timeout);
    }
  };
}
export default {
  name: "debounce",
  data() {
    return {
      timer: null
    };
  },
  mounted() {},
  methods: {
    debounceFun: debounce(() => {
      console.log('okkkk')
    }),
    throlleFun: throlle(x => {
      console.log(x);
    })
  }
};
</script>
<style lang="scss" scoped>
.debounce {
  padding: 20px;
  .throlle {
    width: 200px;
    height: 500px;
    border: 1px solid red;
    overflow: auto;
  }
}
</style>
