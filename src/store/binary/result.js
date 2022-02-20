const result = {
  state: {
    value: ''
  },
  mutations: {
    set(state, newValue) {
      state.value = newValue;
    },
    update(state) {

      const first = this.getters['binary/first_operand/value'];
      if(first.length === 0) {
        state.value = '';
        return;
      }

      const second = this.getters['binary/second_operand/value'];
      if(second.length === 0) {
        state.value = '';
        return;
      }

      const operation = this.getters['binary/operation/value'];

      this.commit('connection/send_binary', `${first}${operation}${second}`);
    },
    reset(state) {
      state.value = '';
    },
  },
  getters: {
    value: (state) => { return state.value; }
  },
  namespaced: true
};

export { result }

