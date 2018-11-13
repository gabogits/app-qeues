const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control.js');
const ticketControl = new TicketControl();

io.on('connection', (client) => {

    // Escuchar el cliente
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente(); //ocupamos la funcion siguiente(), que se encuentra en ticketControl
        console.log(siguiente);

        callback(siguiente) // callback es la respuesta que doy al usuario, viene el turno del ticket

        // con el calback voy a regresar el valor del ticket sig, 
        // resultante de ejecutar siguiente de ticketControl y tomando en Cuenta el ultimo registro del JSON
    });


    client.emit('getEstadoActual', { //al iniciarse la applicacion el servidor emite esta comunicacion, la cual tra consigo un objeto
        //al emitir getEstadoActual al usuario, mandamos un objeto como argumento,
        // con la propiedad actual, que obtiene su valor este a su vez del metodo getUltimoTicket(), este objeto es la data
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });


    client.on('atenderTicket', (data, callback) => { //el server recibe el emit del cliente, toma el argumento y ejecuta un callback
        console.log("esta es la data")
        console.log(data)

        if (!data.escritorio) { //si en argumento del cliente no viene el escritorio, le envia un mensaje de error en el callback
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio); //si hay escritorio esto se le nvia al cliente




        callback(atenderTicket);
        //actualiza/notificar vcambios en los ultimos 4
        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        })

    });

});