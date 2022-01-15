class Connection {

  constructor(address) {
    this.socket = null;
    this.address = address;
    window.onbeforeunload = (event) => {
      this.socket?.close();
    };
  }

  send(data, callback) {
    if(!this.socket || this.socket.readyState != WebSocket.OPEN) {
      this.socket = new WebSocket(this.address);
      this.socket.addEventListener('open', ()=> {
        this.socket.addEventListener('message', (msg) => { callback(msg.data); }, { once: true });
        this.socket.send(data);
      });

      return;
    }

    this.socket.addEventListener('message', (msg) => { callback(msg.data); }, { once: true });
    this.socket.send(data);
  }

};

module.exports = {
  Connection
};
