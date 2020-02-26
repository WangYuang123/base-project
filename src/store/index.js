import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'
Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       console.log('okk')
//       state.count++
//     }
//   }
// })
// export default store
// const moduleA = {
//   state: { count: 0 },
//   mutations: {
//     increment (state) {
//       // 这里的 `state` 对象是模块的局部状态
//       state.count++
//     }
//   },

//   getters: {
//     doubleCount (state) {
//       return state.count * 2
//     }
//   }
// }
export default new Vuex.Store({
  state: {
    name: '根节点name'
  },
  modules: {
    moduleA,
    moduleB
  }
  // state: {},
  // mutations: {},
  // actions: {},
  // modules: {}
  // state: {
  //   count: 0
  // },
  // getters: {
  //   textCount: (state) => {
  //     return `我是数字${state.count}`
  //   }
  // },
  // mutations: {
  //   increment(state) {
  //     state.count++
  //   },
  //   reduce(state) {
  //     state.count--
  //   },
  //   increment5(state) {
  //     state.count +=5
  //   }
  // },
  // actions: {
  //   aIncrement(context) {
  //     setTimeout(() => {
  //       context.commit('increment')
  //     }, 1000)
  //   },
  //   actionA({commit}) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         commit("increment")
  //         resolve()
  //       }, 1000)
  //     })
  //   },
  //   actionB({dispatch, commit}) {
  //     return dispatch('actionA').then(() => {
  //       commit('increment5')
  //     })
  //   }
  // }
})
