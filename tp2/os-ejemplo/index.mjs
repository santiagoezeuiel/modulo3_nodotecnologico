import os from 'os';

// Obtener la arquitectura del sistema
console.log(`Arquitectura: `, os.arch());


// Obtener el tipo de sistema operativo
console.log(`Plataforma: `, os.platform());

// Obtener la cantidad total de memoria
console.log(`Memoria total: `, os.totalmem());

// Obtenmer la memoria libre
console.log(`Memoria libre: `, os.freemem());

// Obtener la informacion de la cpu
console.log(`Informe de la cpu: `, os.cpus());