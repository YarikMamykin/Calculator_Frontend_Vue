const operation = {
  state: {
    value: '&'
  },
  mutations: {
    set(state, newValue) {
      state.value = newValue;
      this.commit('binary/result/update');
    },
  },
  getters: {
    value: (state) => { return state.value; }
  },
  namespaced: true
};

export { operation }


