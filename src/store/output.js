const output = {
  state: {
    payload: ''
  },
  mutations: {
    append(state, char) {
      state.payload = state.payload + char;
    },
    clear(state) {
      state.payload = '';
    },
    pop_last(state) {
      state.payload = state.payload.slice(0,-1);
    },
    push(state) {
      if(state.payload !== '')
        this.commit('connection/send', state.payload);
    }
  },
  getters: {
    value: (state) => { return state.payload; }
  },
  namespaced: true
};

export { output }
