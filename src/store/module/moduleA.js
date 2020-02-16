export default {
  namespaced: true,
  state: {
    text: "moduleA"
  },
  getters: {
    getName(state, getters, roorState) {
      return state.text + roorState.name;
    }
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  },
  actions: {
    // callAction: {
    //  root: true,
    //  handler(namespacedContext) {
    //   let {commit} = namespacedContext
    //   commit('setText', 'AAAAA')
    //   // alert(state.text)
    //  }
    // }
  }
};
