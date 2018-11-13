const fs = require('fs');

class Ticket {

    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;

    }
}


class TicketControl {

    constructor() { //esto se ejecuta apenas se manda llamar la funcion
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimos4 = [];
        //asi podemos leer un archivo json
        let data = require('../data/data.json'); // este archivo de data grabamos informacion relevante en nuestro proceso 

        if (data.hoy === this.hoy) { //si estamos en el mismo dia, o si es otro dia nuevo y hay que reiniciar conteo
            //estamos comparando lo ultimo grabado en el json con el valor de la variable que se asigna  al arrancar la aplicacion
            // si el ultimo valor grabado en json coincide con el valor asignado en this.hoy, esta lógica se ejecuta
            // en caso contrario, se ejecuta reiniciarConteo() para reiniciar los valor, ya que se trata de un nuevo dia

            this.ultimo = data.ultimo; // el ultimo turno del dia grabado en el json, actualiza reasigna el valor de la variable ultimo, de este objeto.
            this.tickets = data.tickets;
            this.ultimos4 = data.ultimos4;
        } else {
            this.reiniciarConteo();
        }

    }
    siguiente() {
        this.ultimo += 1;
        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);
        this.grabarArchivo();

        return `Ticket ${this.ultimo}`
    }

    getUltimoTicket() {
        return `Ticket ${this.ultimo}`
    }
    getUltimos4() {
        return this.ultimos4;
    }
    atenderTicket(escritorio) { //el servidor al escuchar el emit del cliente y teniendo un escritorio como argumento ejecuta este metodo

        if (this.tickets.length === 0) {
            return 'No hay tickets';
        }

        let numeroTicket = this.tickets[0].numero; // obtenemos la propiedad número del primer elemento guardado en el arreglo tickets
        this.tickets.shift(); // despues ese lo eliminamos del arreglo tickets, por que ya lo estamos atendiendo en este momento

        let atenderTicket = new Ticket(numeroTicket, escritorio); //generamos otra instancia del objeto pasandole el numero de tickets y el escritorio mandado por el usuario
        this.ultimos4.unshift(atenderTicket); //y ese lo metemos en un nuevo arreglo llamado ultimos 4, colocandolo al principio del arreglo

        if (this.ultimos4.length > 4) {
            this.ultimos4.splice(-1, 1); //conforme se va llenando ultimos4 se borra el elemento más antiguo del arreglo
            //para que se actualiza y siempre se tengan solo los 4 mas recientes
            //esto ultimos cuatro son los que se van a enseñar en la pantalla publica
        }
        console.log('Ultimos 4');
        console.log(this.ultimos4);
        //se graba el json
        this.grabarArchivo();
        //y este argumento se le pasa al usuario, cuando hay tickets
        return atenderTicket;
    }
    reiniciarConteo() {
        this.ultimo = 0; //reinicia el conteo 
        this.tickets = [];
        console.log('se ha inicializado el sistema')
        this.grabarArchivo(); //graba en el json
        this.ultimos4 = [];
    }


    grabarArchivo() { //todo el tiempo estaremos grabando por lo que la guardamos en una función
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        };

        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString);

    }
}


module.exports = {
    TicketControl
}