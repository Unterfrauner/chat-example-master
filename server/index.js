const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { //sobald man mit server verbunden ist
    socket.on('chat message', msg => { //sobald nachricht verschickt wurde()chat message
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`); //welcher server????
});