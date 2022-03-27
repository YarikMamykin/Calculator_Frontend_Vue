import { Connection } from '@/connection.js'

const host = process.env.VUE_APP_HOST ? process.env.VUE_APP_HOST : '127.0.0.1';
const port = process.env.VUE_APP_PORT ? process.env.VUE_APP_PORT : '8081';

const connection = {
  state: {
    self: new Connection(`ws://${host}:${port}`)
  },
  mutations: {
    send(state, data) {
      const request = `{
      "pipe": "DECIMAL",
      "data": "${data}"
      }`;
      state.self.send(request, (msg_data) => { 
        this.commit('simple/results/add', data + '=' + parseFloat(msg_data));
      });
    },
    send_binary(state, data) {
      const request = `{
      "pipe": "BINARY",
      "data": "${data}"
      }`;
      state.self.send(request, (msg_data) => { 
        this.commit('binary/result/set', msg_data);
      });
    },
    send_time(state, data) {
      const request = `{
      "pipe": "TIME",
      "data": "${data}"
      }`;
      state.self.send(request, (msg_data) => { 
        this.commit('time/result/set', msg_data);
      });
    }
  },
  namespaced: true
};

export { connection }
