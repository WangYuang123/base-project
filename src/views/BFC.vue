<template>
  <div>
    <h1>BFC练习</h1>
    <div
      style="width: 100px;height: 100px;background: red;margin: 10px;float: left"
    ></div>
    <!-- <div style="width: 100px;height: 100px;background: green;margin: 10px;"></div> -->
    <div
      style="width: 400px;height: 400px;background: #aaa;position: absolute; top: 0; left: 0"
    >
      <div
        style="width: 100px;height: 100px;background: red;margin: 10px;"
      ></div>
      <div
        style="width: 100px;height: 100px;background: green;margin: 10px;"
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
