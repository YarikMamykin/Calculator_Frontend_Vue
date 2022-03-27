const operation = {
  state: {
    value: '+'
  },
  mutations: {
    set(state, newValue) {
      state.value = newValue;
      this.commit('time/result/update');
    },
  },
  getters: {
    value: (state) => { return state.value; }
  },
  namespaced: true
};

export { operation }
