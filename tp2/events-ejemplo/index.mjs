import { EventEmitter  } from "events";

// Crear una lista de EventEmmitter
const emisor = new EventEmitter();


// Definir un evento personalizado
emisor.on('saludo', (nombre) => {
    console.log (`!Hola, ${nombre}`);
});


// Emitir el evento 'Saludo';
emisor.emit('saludo', 'Mundo');
