<template>
  <div>
    子组件11111111111
    <div>father1:{{ father1 }}</div>
  </div>
</template>

<script>
export default {
  name: 'son',
  data() {
    return {
      index: 1111111111111
    }
  },
  inject: ['father1']
}
</script>

<style></style>
