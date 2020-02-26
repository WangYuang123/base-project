<template>
  <div>
    <h4>我是内容区域父组件</h4>
    <slot />
    <Child />
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: {
    Child
  }
}
</script>

<style></style>
