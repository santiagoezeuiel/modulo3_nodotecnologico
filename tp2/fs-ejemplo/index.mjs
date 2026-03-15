import fs from 'fs';


// Leer un archivo de manera asncrona
fs.readFile(`./data/example.txt`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contenido del archivo: `, data);
});

// Escribir en un nuevo archivo
fs.watchFile(`./data/newfile.txt`, 'contenido nuevo', (err) => {
    if (err) throw err;
    console.log(`Archivo creado y escrito`);
});

// Renombrar un archivo;
fs.rename(`./data/newfile.txt`, '.data/renamedfile.txt', (err) => {
    if (err) throw err;
    console.log(`Archivo renombrado`);
});