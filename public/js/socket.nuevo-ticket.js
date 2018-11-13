//Comando para establecer la comunicacion
var socket = io();
var label = $("#lblNuevoTicket");

socket.on('connect', function() {
    console.log("conectado con el servidor")
})


socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor")
})



$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) { //null es para especificar que no te voy a enviar ningun parametro
        // siguienteTicket es el argumento que va regresar el servidor en el callback y el que va pintar en el div  $("#lblNuevoTicket");
        label.text(siguienteTicket);
    });

});


socket.on('getEstadoActual', function(resp) { //aqui voy a escuchar (on) al servidor, en getEstadoActual, me va regresar resp como argmento, donde voy obtener el valor de actual,  quien me va mandar el ultimo turno en curso
    console.log(resp.actual);
    label.text(resp.actual);

    //aqui solo una comunicacion del servidor al cliente, en el caso de siguienteTicket, habia una comuniacion del cliente al servidor, este mandaba una respuesta, es posible que por ello fuera el callback
});