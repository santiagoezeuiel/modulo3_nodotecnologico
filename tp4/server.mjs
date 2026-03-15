//Importamos ek framework Express
import express from 'express';
//Importamos los controladores
import {listaTareaController, listaTareaCompletadaController, crearTareaController, 
    completarTareaController, eliminarTareaControler} from './controllers/tareaControlers.mjs';

//Inicializamos una aplicacion de Express    
const app = express();
// Definimos un puerto en el que escucha el servidor
const PORT = 3000;

//Middleware para permitir el manejo de solicitud con cuerpo en fromato JSON
app.use(express.json());

//Rutas
//Rutas para obtener todas las tareas
app.get('/tareas', listaTareaController);
//Ruta para obtener tareas completas
app.get('/tarea/completa', listaTareaCompletadaController);
//Ruta para crear una nueva tarea
app.post('/tareas', crearTareaController);
//Ruta para marcar una tarea como completa
app.put('/tareas/:id/completar', completarTareaController);
//Ruta para eliominar una tarea
app.delete('/tareas/:id', eliminarTareaControler);

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})



