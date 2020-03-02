import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import debounce from '@/views/debounce.vue'
import dragdrop from '@/views/dragdrop.vue'
import routerProcess from '@/views/routerProcess/index.vue'
import processTom from '@/views/routerProcess/processTom.vue'
import processJack from '@/views/routerProcess/processJack.vue'
import vuexCom from '@/views/testVuex/index.vue'
// import copy from "@/views/copy.vue";
import transmit from '@/views/transmit/index.vue'
import eventloop from '@/views/eventloop.vue'
// import routerList from './user.router.js'
// import keepAlive from '@/views/keepAlive/father'
// import keepAliveSon1 from '@/views/keepAlive/son1'
// import keepAliveSon2 from '@/views/keepAlive/son2'
Vue.use(VueRouter)

let routerList = []
function importAll(routerArr) {
  routerArr.keys().forEach(key => {
    // console.log(routerArr(key).default)
    // routerList = routerList.concat(routerArr(key).default)
    routerList = [...routerList, ...routerArr(key).default]
  })
}

// const baseRuoter = [
//   {
//     path: "/",
//     name: "home",
//     component: Home,
//     beforeEnter(to, from, next) {
//       console.log("首页路由独享守卫：beforeEnter");
//       next();
//     }
//   },
// ]
importAll(require.context('.', true, /.router\.js/))
const routes = [
  ...routerList,
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter(to, from, next) {
      console.log('首页路由独享守卫：beforeEnter')
      next()
    }
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: debounce
  },
  {
    path: '/dragdrop',
    name: 'dragdrop',
    component: dragdrop
  },
  {
    path: '/routerProcess',
    name: 'routerProcess',
    component: routerProcess,
    beforeEnter(to, from, next) {
      console.log('用户路由独享守卫：beforeEnter')
      next()
    },
    children: [
      {
        path: 'tom',
        name: 'tom',
        component: processTom
      },
      {
        path: 'jack',
        name: 'jack',
        component: processJack,
        beforeEnter(to, from, next) {
          console.log('jack组件路由独享守卫：beforeEnter')
          next()
        }
      }
    ]
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: vuexCom
  },
  {
    path: '/transmit',
    name: 'transmit',
    component: transmit
  },
  {
    path: '/eventloop',
    name: 'eventloop',
    component: eventloop
  },
  {
    path: '/randerTem',
    name: 'randerTem',
    component: () => import('@/views/randerTem.vue')
  },
  {
    path: '/controlSlot',
    name: 'controlSlot',
    component: () => import('@/views/controlslot/index')
  },
  {
    path: '/mapType',
    name: 'mapType',
    component: () => import('@/views/MapType')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('@/views/renderTest/index')
  },
  {
    path: '/saveForm',
    name: 'saveForm',
    component: () => import('@/views/saveForm')
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import('@/views/Promise/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫---->beforeEach')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('全局解析守卫----->beforeResolve')
  next()
})
router.afterEach(() => {
  console.log('全局后置守卫---->afterEach')
})
export default router
