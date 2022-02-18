//? Servidor de express
const express = require('express');
const app = express();
//? Servidor de sockets
const server = require('http').createServer(app);
//? Configurador del socket server
const io = require('socket.io')(server);

//?Desplegar el directorio publico
app.use(express.static(__dirname + '/public'));

//? Se generan nuevos id's port cada conexión
io.on('connection', (socket) => {
    console.log('Cliente conectado !!!', socket.id);
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server',
        date: new Date()
    }) //* Header, Payload

    socket.on('mensaje-tx', (data) => {

        console.log(data);
    })
});

server.listen(8080, () => console.log('Server corriendo en el puerto 8080'));