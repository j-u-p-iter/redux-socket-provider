const app = require('express')();
const server = require('http').Server(app); 
const io = require('socket.io')(server);

const createSocketServer = require('./socketServer');

createSocketServer(io);

const SERVER_PORT = 7000;

server.listen(SERVER_PORT, () => {
  console.log(`Listen server on http://localhost:${SERVER_PORT}`);
});
