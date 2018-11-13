//Comando para establecer la comunicacion
var socket = io();

var searchParams = new URLSearchParams(window.location.search); //aqui recoge el parametro de la url


if (!searchParams.has('escritorio')) { //aqui evalua que exista el parametro, si no mandaria un error y al submit redirige al home

    window.location = 'index.html'
    throw new Error('El escritorio es necesario');

}

var escritorio = searchParams.get('escritorio'); //recoge el parametro escritorio
var label = $("small");

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        // en el emit manda el valor de escritorio como objeto, ademas de un callback
        //que se ejecuta a la respuesta del servidor, trayendo un 
        console.log(resp)

        if (resp === 'No hay tickets') {
            //alert(resp);
            label.text('Ya no hay tickets');
            return;
        }
        label.text('Ticket' + resp.numero);
    });
});