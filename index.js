const app = require('koa')();
const staticserve = require('koa-static');
const IO = require('koa-socket');
const io = new IO();
const port = process.env.PORT || 3000;


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/client/index.html');
// });
app.use(staticserve('client/public'));
io.attach(app);

io.on('connection', socket => {
  console.log('a user has connected');
  socket.on('disconnect', () => console.log('disconnect'));
  socket.on('message', msg => {
    console.log('msg: ' + msg);
    io.emit('message', msg);
  });
});


app.listen(port);
console.log(`Listening on *:${port}`);
