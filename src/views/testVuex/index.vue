<template>
  <div>
   <h1 class="b-text-cen pb-20 pt-20">练习vuex</h1>
   <div class="b-flex b-f-dir-col b-f-justify-cen">
    <!-- <p class="b-text-cen">count: {{count}}</p>
    <p class="b-text-cen">count: {{textCount}}</p>
    <div>
     <el-button @click="actionB">增加</el-button>
     <el-button @click="reduceLocal">减少</el-button>
    </div> -->
    <!-- <hr>
    <div>
     <p class="b-text-cen">主角: {{mainRole}}</p>
     <p class="b-text-cen">介绍: {{mainIntroduce}}</p>
     <el-button>增加</el-button>
     <el-button >减少</el-button>
    </div> -->
    <div>
      <p class="b-text-cen">moduleAText: {{name}}</p>
      <p class="b-text-cen">moduleBText: {{name2}}</p>
      <p class="b-text-cen">getName: {{getName}}</p>
      <el-button @click="setText">改变name</el-button>
      <!-- <el-button @click="callAction">actions改变name</el-button> -->
      <el-button @click="callActionB">actionsB改变name</el-button>
    </div>
   </div>
  </div>
</template>

<script>
// mapState, mapGetters, mapMutations, mapActions
import { mapState,mapGetters, mapMutations} from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('moduleB')
export default {
 computed: {
  ...mapState({
   name: state => state.moduleA.text,
   name2: state => state.moduleB.text
  }),
  ...mapGetters({
    getName: 'moduleA/getName'
  })
  // ...mapGetters(['textCount']),
  // ...mapState(['count'])
 },
 mounted() {
  // console.log(this.$store.getters.)
 },
 methods: {
  ...mapMutations({
    setText: 'moduleA/setText'
  }),
  // ...mapActions({
  //   callAction: 'callAction',
  // })
  ...mapActions(['callActionB'])
  // increment
  // ...mapMutations(['increment', 'reduce']),
  // reduceLocal() {
  //  this.$store.commit('reduce')
  // },
  // ...mapActions(['aIncrement', 'actionB']),
  // aIncrementLocal() {
  //  this.$store.dispatch('actionA').then(() => {
  //   console.log("okkk")
  //  })
  // }
 }
}
</script>

<style>

</style>