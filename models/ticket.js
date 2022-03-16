const {v4: uuidv4} = require('uuid')

class Ticket {

    constructor(numero){
        this.id     = uuidv4();
        this.number = numero;
        this.desk   = null;
        this.agent   = null
    }

}

module.exports = Ticket;