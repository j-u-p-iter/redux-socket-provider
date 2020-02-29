const app = require('express')();
const server = require('http').Server(app); 
const io = require('socket.io')(server);

const createSocketServer = require('./socketServer');

createSocketServer(io);

server.listen('5000', () => {
  console.log('Listen server on http://localhost:5000');
});
