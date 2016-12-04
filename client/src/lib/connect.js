import io from 'socket.io-client';

const socket = io();

socket.on('onconnected', data => {
  console.log(`Connected successfully to server with id ${data.id}`);
});

socket.emit('message', 'Hello');
