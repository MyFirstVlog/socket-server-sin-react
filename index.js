const Server = require("./models/server");
require('dotenv').config(); //* Usa en el archivos de variables globales

const server = new Server();

server.execute();
//? Se generan nuevos id's port cada conexión


