import express from "express";
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayorDe30Controller } from "./controller/superheroesController.mjs";

const app = express();
const PORT = 3005;

// Ruta
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayorDe30Controller);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

//Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo http://localhost:${PORT}`)
});