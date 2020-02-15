<template>
  <div>
    <h3>I am Jack</h3>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("Jack组件内守卫----->beforeRouteEnter");
    next();
  }
};
</script>

<style></style>
