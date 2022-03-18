const TicketList = require("./ticket-list");

class Sockets{

    constructor(io){
        this.io = io;

        //? Crear instancia de ticket-list.js

        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents(){
        //On connection
        this.io.on('connection', (socket) => {
            console.log('cliete conectado',socket.id)
            //* Esuchar evento mensaje-tx
            socket.on('solicitar-ticket', (data, callback) => {
                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket); //Despues de crear el ticket mando le digo al front que se ejecute el callback
                console.log({nuevoTicket});
            })

            socket.on('siguiente-ticket-trabajar', ({agente,escritorio}, callback) => {
                const suTicket = this.ticketList.assignTicket(agente, escritorio);

                callback(suTicket);

                this.io.emit('ticket-asignado', this.ticketList.ultimos13)
            })
        });
    }



}

module.exports = Sockets;