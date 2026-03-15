import http from 'http';

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/palin');
    res.end(`!Hola, mundo`);
});

// Configurar el servidor para que escuche en el puerto 3000
server.listen(300, '127.0.0.1', () => {
    console.log(`Servidor correindo en http://127.0.0.1:3000/`);
});