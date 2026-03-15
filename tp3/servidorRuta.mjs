import express from 'express';

const app = express();
const PORT = 3000;

//Ruta GET CON PARAMETROS DE RUTA
//sOLICITAR HTTP://LOCALHOST:3000/USER/123
app.get('/user/:id', (req, res) => {
    const userid = req.params.id;
    console.log(`ID del usuario recibido: ${userid}`);
    res.send(`El perfil del usuario con ID: ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});