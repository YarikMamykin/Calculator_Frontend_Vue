const first_operand = {
  state: {
    value: ''
  },
  mutations: {
    set(state, newValue) {
      state.value = newValue;
      this.commit('binary/result/update');
    },
    invert(state) {
      state.value = Array.from(state.value).map((c)=>{ 
        if(c === '0') return '1';
        if(c === '1') return '0';
      }).join('');
      this.commit('binary/result/update');
    },
    shift(state, direction) {
      if(state.value.length === 0)
        return;

      if(direction === 0) { // shift left 
        state.value += '0';
        this.commit('binary/result/update');
        return;
      }

      if(direction === 1) { // shift right 
        state.value = state.value.slice(0,-1);
        this.commit('binary/result/update');
      }
    },
    reset(state) {
      state.value = '';
      this.commit('binary/result/update');
    },
  },
  getters: {
    value: (state) => { return state.value; }
  },
  namespaced: true
};

export { first_operand }

