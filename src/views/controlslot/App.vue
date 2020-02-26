<template>
  <div>
    <h4>主要内容区域</h4>
    <Parent>
      <p style="color: red;margin: 20px">
        Parent 组件插槽内容
      </p>
    </Parent>
    <portal to="destination">
      <p>
        This slot content will be rendered wherever the is located.fsfsfsfsd
      </p>
    </portal>
  </div>
</template>
<script>
import Parent from './Parent'
// import SlotContent from './SlotContent'
import SlotContent from './SlotContent'
export default {
  components: {
    Parent
  },
  slotContent: SlotContent
  // created() {
  //   this.$emit('slotFun', SlotContent)
  // }
}
</script>

<style></style>
