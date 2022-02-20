class Sockets{

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        //On connection
        this.io.on('connection', (socket) => {
            //* Esuchar evento mensaje-tx
            socket.on('mensaje-tx', (data) => {
                console.log(data);
                this.io.emit('mensaje-desde-server',data);
            })
        });
    }



}

module.exports = Sockets;