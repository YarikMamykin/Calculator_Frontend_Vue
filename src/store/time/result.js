const constructTimeString = (storage, timeOperand) => {
  let timeValueComponents = [];
  for(const field of [ 'years', 
                       'months', 
                       'weeks', 
                       'days', 
                       'hours', 
                       'minutes', 
                       'seconds' ]) {
    const storageUrl = `time/${timeOperand}/${field}`;
    timeValueComponents.push(storage.getters[storageUrl]);
  }
  return timeValueComponents.join('_');
};

const result = {
  state: {
    value: ''
  },
  mutations: {
    set(state, newValue) {
      state.value = newValue;
    },
    update(state) {

      const first = constructTimeString(this, 'first_operand');
      const operation = this.getters['time/operation/value'];
      const second = constructTimeString(this, 'second_operand');

      this.commit('connection/send_time', `${first}${operation}${second}`);
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

