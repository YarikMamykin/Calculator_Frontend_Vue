const results = {
  state: {
    payload: []
  },
  mutations: {
    add(state, result) {
      state.payload.unshift(result);
    },
    clear(state) {
      state.payload = [];
    }
  },
  getters: {
    value: (state) => { return state.payload; }
  },
  namespaced: true
};

export { results }
