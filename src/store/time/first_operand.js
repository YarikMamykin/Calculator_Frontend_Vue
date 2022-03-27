const first_operand = {
  state: {
    value: {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mutations: {
    set_years(state, newValue) {
      state.value.years = newValue;
      this.commit('time/result/update');
    },
    set_months(state, newValue) {
      state.value.months = newValue;
      this.commit('time/result/update');
    },
    set_weeks(state, newValue) {
      state.value.weeks = newValue;
      this.commit('time/result/update');
    },
    set_days(state, newValue) {
      state.value.days = newValue;
      this.commit('time/result/update');
    },
    set_hours(state, newValue) {
      state.value.hours = newValue;
      this.commit('time/result/update');
    },
    set_minutes(state, newValue) {
      state.value.minutes = newValue;
      this.commit('time/result/update');
    },
    set_seconds(state, newValue) {
      state.value.seconds = newValue;
      this.commit('time/result/update');
    },

    reset_years(state) {
      state.value.years = 0;
      this.commit('time/result/update');
    },
    reset_months(state) {
      state.value.months = 0;
      this.commit('time/result/update');
    },
    reset_weeks(state) {
      state.value.weeks = 0;
      this.commit('time/result/update');
    },
    reset_days(state) {
      state.value.days = 0;
      this.commit('time/result/update');
    },
    reset_hours(state) {
      state.value.hours = 0;
      this.commit('time/result/update');
    },
    reset_minutes(state) {
      state.value.minutes = 0;
      this.commit('time/result/update');
    },
    reset_seconds(state) {
      state.value.seconds = 0;
      this.commit('time/result/update');
    },
  },

  getters: {
    years: (state) => { return state.value.years; },
    months: (state) => { return state.value.months; },
    weeks: (state) => { return state.value.weeks; },
    days: (state) => { return state.value.days; },
    hours: (state) => { return state.value.hours; },
    minutes: (state) => { return state.value.minutes; },
    seconds: (state) => { return state.value.seconds; }
  },

  namespaced: true
};

export { first_operand }

