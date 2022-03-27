const result = {
  state: {
    value: ''
  },
  mutations: {
    set(state, newValue) {
      state.value = newValue;
    },
    update(state) {

      const first = this.getters['time/first_operand/value'];
      const second = this.getters['time/second_operand/value'];
      const operation = this.getters['time/operation/value'];

      // if(first.length === 0) {
        // state.value = '';
        // return;
      // }

      // if(second.length === 0) {
        // state.value = '';
        // return;
      // }


      // this.commit('connection/send_time', `${first}${operation}${second}`);
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

