<template>
  <div>
    <h1>父组件</h1>
    <p>sonIndex:{{ sonIndex }}</p>
    <sonCom1 v-if="boolSon1"></sonCom1>
    <sonCom2></sonCom2>
  </div>
</template>

<script>
import sonCom1 from "./son";
import sonCom2 from "./son2";
export default {
  name: "father",
  components: {
    sonCom1,
    sonCom2
  },
  data() {
    return {
      boolSon1: false,
      sonIndex: ""
    };
  },
  computed: {
    // sonIndex() {
    //   console.log(this.$children)
    //   return 111
    // }
  },
  provide: {
    father1: "father11111"
  },
  mounted() {
    // console.log(this.$children)
    setTimeout(() => {
      this.boolSon1 = true;
    }, 1000);
    this.sonIndex = this.$children[0].index;
    // console.log(provide)
    const uniqueArr = this.unique([1, 1, 2, 3, 1, 2, 3, 5]);
    console.log(uniqueArr);
  },
  methods: {
    // unique(arr) {
    //   if(typeof arr === 'object' && Array.isArray(arr)) {
    //     for(let i = 0; i < arr.length; i++) {
    //       for(let j = i + 1; j < arr.length; j++) {
    //         if(arr[i] === arr[j]) {
    //           arr.splice(j, 1)
    //         }
    //       }
    //     }
    //     return arr
    //   } else {
    //     return '不是数组'
    //   }
    // }
    unique(arr) {
      if (arr instanceof Array) {
        throw Error("当前传入不是数组");
      } else {
        let list = [];
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
          if (!obj[arr[i]]) {
            list.push(arr[i]);
            obj[arr[i]] = true;
          }
        }
        return list;
      }
    }
  }
};
</script>

<style></style>
