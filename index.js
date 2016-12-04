const app = require('koa')();
const staticserve = require('koa-static');
const IO = require('koa-socket');
const UUID = require('uuid/v4');
const io = new IO();
const port = process.env.PORT || 3000;

app.use(staticserve('client/public'));
io.attach(app);

io.on('connection', ({socket}, data) => {
  socket.userid = UUID();
  socket.emit('onconnected', { id: socket.userid });
  console.log(`User ${socket.userid} has connected`);

  socket.on('disconnect', () =>
    console.log(`User ${socket.userid} disconnected`));

  socket.on('message', msg => {
    console.log('msg: ' + msg);
    socket.emit('message', msg);
  });
});


app.listen(port);
console.log(`Listening on *:${port}`);
