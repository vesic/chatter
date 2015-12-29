var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000;
    
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');    
})

io.on('connection', (socket) => {
    socket.on('message', (received) => {
        io.emit('message', received);
    })
});

http.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`listent @:${port}`);
})
