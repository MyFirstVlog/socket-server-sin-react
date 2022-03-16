const Ticket = require("./ticket");

class TicketList {
    constructor(){
        this.lastNumber = 0;
        this.pendings = [];
        this.assigns = [];
    }

    get siguienteNumero(){
        this.lastNumber++;
        return this.lastNumber;
    }

    //*Retornando los ultimos 13 tickets para las pantallas del front(tarjetas e historial)

    get ultimos13(){
        return this.assigns.slice(0,13);
    }
    
    crearTicket(){
        const nuevoTicket = new Ticket (this.siguienteNumero);
        this.pendings.push(nuevoTicket);
        return nuevoTicket;
    }

    assignTicket(agent, desk){
        if(this.pendings.length === 0) return null;

        const siguienteTicket = this.pendings.shift();

        siguienteTicket.desk = agent;
        siguienteTicket.agent = desk;

        this.assigns.unshift(siguienteTicket);

        return siguienteTicket;
    }
}

module.exports = TicketList;