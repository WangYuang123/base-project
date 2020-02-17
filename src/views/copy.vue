<template>
  <div>
    <h1 class="b-text-cen pb-20 pt-20">深拷贝</h1>
    <el-button @click="copyFun(obj)">拷贝</el-button>
    <el-button @click="updatayqname">改变余情name</el-button>
  </div>
</template>

<script>
function clone(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
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
        // yuqing: '123',
        // yusheng: '456'
      },
      cloneTarget: {}
    };
  },
  methods: {
    copyFun(target) {
      // 简单版
      this.cloneTarget = clone(target);

      // 浅拷贝
      //  let cloneTarget = {}
      //  let target = this.obj
      //  for(const key in target) {
      //    console.log(key)
      //    cloneTarget[key] = target[key]
      //  }
      //  this.cloneTarget = cloneTarget
      //  console.log(this.cloneTarget)
    },
    updatayqname() {
      // this.obj.yuqing.name = "jy";
      console.log(this.cloneTarget);
    }
  }
};
</script>

<style></style>
