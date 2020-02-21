<template>
  <div>
    <h1>js执行机制</h1>
    <global></global>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(function() {
      console.log("定时器开始啦");
    });
    new Promise(function(resolve) {
      console.log("马上执行for循环啦");
      for (var i = 0; i <= 99; i++) {
        i == 99 && resolve();
      }
    }).then(() => {
      console.log("执行then函数啦");
    });
    console.log("代码执行结束啦");
  }
};
</script>

<style></style>
