export default {
 namespaced: true,
 state: {
     text: 'moduleB'
 },
 getters: {},
 mutations: {
  setText(state, value) {
      state.text = value
  }
},
 actions: {
  callActionB({commit}) {
   commit("setText", 'BBBBB')
  }
 }
}