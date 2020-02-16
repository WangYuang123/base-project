<template>
  <div>
    <h1 class="b-text-cen pb-20 pt-20">深拷贝</h1>
    <el-button @click="copyFun(obj)">拷贝</el-button>
    <el-button @click="updatayqname">改变余情name</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        yuqing: {
          name: "jinxiu",
          age: 29,
          hobby: ["perform", "dance"]
        },
        yusheng: {
          name: "xiaowanqing",
          age: 39,
          hobby: ["writing", "travel"]
        }
      },
      cloneTarget: {}
    };
  },
  methods: {
    copyFun(target) {
      //  let cloneTarget = {}
      //  let target = this.obj
      //  for(const key in target) {
      //    console.log(key)
      //    cloneTarget[key] = target[key]
      //  }
      //  this.cloneTarget = cloneTarget
      //  console.log(this.cloneTarget)

      // 简单版
      if (typeof target === "object") {
        let cloneTarget = {};
        for (const key in target) {
          cloneTarget[key] = this.copyFun(target[key]);
        }
      } else {
        return target;
      }
      // console.log(cloneTarget);
    },
    updatayqname() {
      this.obj.yuqing.name = "jy";
      console.log(this.cloneTarget);
    }
  }
};
</script>

<style></style>
