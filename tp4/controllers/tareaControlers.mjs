import {listaTarea, listaTareaCompleta, crearTarea, completarTarea, eliminarTarea} from '../services/tareaService.mjs';
import {renderizarListaTarea, renderizarMensaje} from '../views/tareaVista.mjs';


//Controlador para listar todas las tareas
export function listaTareaController(req, res) {
    const tareas = listaTarea();
    res.send(renderizarListaTarea(tareas));
}

//Controlador para listar solo las tareas com pletadas
export function listaTareaCompletadaController (req, res){
    const tareaCompletadas = listaTareaCompleta();
    res.send(renderizarListaTarea(tareaCompletadas));
}

//Controlador para crear nuevas tareas
export function crearTareaController (req, res) {
    const {id, titulo, descripcion, completado} = req.body;
    crearTarea(id, titulo, descripcion, completado);
    res.send(renderizarMensaje(`Tarea creada con exito`));
}

//Controlador apra crear una nueva tarea
export function completarTareaController (req, res) {
    const{id} = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje(`Tarea marcada como completada`));
}

// Controlador para eliminar una tarea
export function eliminarTareaControler (req, res) {
    const {id} = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje(`Tarea eliminada con exito`));
}

