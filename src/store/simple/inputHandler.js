class InputHandler {
  constructor() {
    this.numericKeys = [
        '9','8','7',
        '6','5','4',
        '3','2','1',
        '0','00','000'
      ];

    this.operationKeys = [
        "+",
        "-",
        "/",
        "*",
        "."
      ];

    this.eraseSymbolKey = 'Backspace';
    this.eraseKey = 'Delete';
    this.submitKey = 'Enter'
  } 
};


const inputHandler = {
  state: {
    self: new InputHandler()
  },
  mutations: {
    handle(state, keyId) {
      if(state.self.operationKeys.includes(keyId) || 
         state.self.numericKeys.includes(keyId)) {

        this.commit('simple/output/append', keyId);
        return;
      }

      if(state.self.eraseSymbolKey == keyId) {
        this.commit('simple/output/pop_last');
        return;
      }

      if(state.self.eraseKey == keyId) {
        this.commit('simple/output/clear');
        return;
      }

      if(state.self.submitKey == keyId) {
        this.commit('simple/output/push');
        this.commit('simple/output/clear');
      }
    }
  },
  namespaced: true
};

export { inputHandler }

