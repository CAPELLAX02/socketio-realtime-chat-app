const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const port = 5000;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User (${socket.id}) connected.`);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User (${socket.id}) joined room (${data})`);
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User (${socket.id}) disconnected.`);
  });
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
