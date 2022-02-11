import { Connection } from '@/connection.js'

const host = process.env.VUE_APP_HOST ? process.env.VUE_APP_HOST : '127.0.0.1';
const port = process.env.VUE_APP_PORT ? process.env.VUE_APP_PORT : '8081';

const connection = {
  state: {
    self: new Connection(`ws://${host}:${port}`)
  },
  mutations: {
    send(state, data) {
      state.self.send(data, (msg_data) => { 
        this.commit('results/add', data + '=' + parseFloat(msg_data));
      });
    },
    send_binary(state, data) {
      state.self.send(data, (msg_data) => { 
        this.commit('binary/result/set', msg_data);
      });
    }
  },
  namespaced: true
};

export { connection }
