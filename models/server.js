const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./socktes');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //?Http server
        this.server = http.createServer(this.app);

        //? Configuraciones de sockets

        this.io = socketio(this.server,{/*Configuraciones*/});

        //? Inicializar sockets
        this.sockets = new Sockets(this.io);
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname, '../public' )));
        this.app.use(cors());
        this.app.get('/ultimos',(req, res) => {
            res.json({
                ok: true,
                ultimos: this.sockets.ticketList.ultimos13
            })
        })
    }

    // configurarSockets(){
    //     //????
    //     new Sockets(this.io);
    // }

    execute(){
        //?Inciailizar middlewares
        this.middlewares();
        //?Inicializar sockets
        // this.configurarSockets();
        //?Inicializar el server
        this.server.listen((this.port || 3000), () => console.log('Server corriendo en el puerto 8080'));
    }
}



module.exports = Server;