<template>
  <div>
    <h1 class="b-text-cen pt-20 pb-20">用户</h1>
    <p>
      <router-link to="/">首页</router-link>
      <span style="display: inline-block;margin: 0 20px;">|</span>
      <router-link to="/routerProcess/tom">TOM</router-link>
      <span style="display: inline-block;margin: 0 20px;">|</span>
      <router-link to="/routerProcess/jack">JACK</router-link>
    </p>
    <div
      style="width: 200px;height: 200px;border: 1px dashed #aaa;margin-top: 50px;"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("user组件内守卫----->beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("user组件更新守卫--->beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开组件守卫---->beforeRouteLeave");
    const answer = window.confirm("你是否要离开user组件");
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style></style>
