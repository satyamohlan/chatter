const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static('public'));
io.on('connection', socket => {
  console.log('new Socket connection');
})
const port = 3000 || process.env.PORT;
server.listen(port, () => console.log(`listening on port ${port}`));