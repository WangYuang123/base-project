<template>
  <div>
    <h3>子组件控制父组件的slot</h3>
    <div style="width: 100%;heihgt: 10px;margin: 10px;"></div>
    <ActionBar>
      <Component :is="slotContent" />
    </ActionBar>
    <div style="width: 100%;heihgt: 10px;margin: 10px;"></div>
    <!-- <App @slotFun="component => (slotContent = component)" /> -->
    <!-- <App @slotFun="slotFun" /> -->
    <App />
  </div>
</template>

<script>
import ActionBar from './ActionBar'
import App from './App'
export default {
  components: {
    ActionBar,
    App
  },
  data() {
    return {
      slotContent: App.slotContent
    }
  },

  // slotContent: SlotContent,
  methods: {
    // slotFun(component) {
    //   this.slotContent = component
    // }
  }
}
</script>

<style></style>
