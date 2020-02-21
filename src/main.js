import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/style/index.scss";
import "./components/globalCom.js";
import {checkJurisdiction} from '@/common/jurisdiction'

// console.log(checkJuridiction('10'))

Vue.directive('permission', {
  inserted(el, binding) {
    let permission = binding.value
    if(permission) {
      let hasPermission = checkJurisdiction(permission)
      if(!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('没有key')
    }
  }
})

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
