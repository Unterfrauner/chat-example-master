const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; //der port gibt an wie man den server erreicht
const verbunden = "verbunden";
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

io.on('connection', (socket) => { //sobald man mit server verbunden ist
    io.emit('verbindung', verbunden)
    socket.on('chat message', msg => { //sobald nachricht verschickt wurde()chat message
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at ${port}/`); //welcher server????
});

