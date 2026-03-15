import express from 'express';

// Crear un instancia de express
const app = express();

// Configurar el puerto en el servidor escuchara
const PORT = 3000;

// Ruta basica
app.get('/', (req, res) => {
    res.send('!Hola mundo¡');
});

// Ruta GET para home
//Solicitud http://localhost:3000/inicio
app.get('/inicio', (req, res) => {
    res.send(`Pagina de Inicio`);
});

// Ruta GET para recibir datos simples
//Solicitud http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send(`Datos recibidos`);
});

//Ruta GET con multiples parametros
//Solicitud: http://localhost:3000/product/electronico/456
app.get('/product/:category/:id', (req, res) => {
    const {category, id} = req.params;
    res.send(`Categoria: ${category}, ID del producto ${id}`);
});

// Ruta GET con parametros de consola
// Solicitud: http://localhost:3000/search?=javascript
app-get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultados de busqueda para: ${query}`);
});

// Ruta GET con parametros de consola
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const{type, minPrice, maxPrice} = req.query;
    res.send(`Filptrar por tipo: ${type}, rango de precio: ${minPrice} a ${maxPrice}`);
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo correctamente en http://localhost:${PORT}`);
});

