// Importar la capa de persistencia (repositorio)
import TareaRepository from '../repository/tareaRepository.mjs';
import Tarea from '../models/tarea.mjs'; //Importar el modelo de tarea

//Intancia el repositorio apra manejar las tareas
const tareaRepo = new TareaRepository();

//Servicio para obtener todas las tareas
export function listaTarea() {
    // obtener todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas();
}

//Servicio para obtener solo las tareas completas
export function listaTareaCompleta () {
    //obtiene todas las tareas desde la capa de persistencia
    const tarea = tareaRepo.obtenerTodas();
    //Filtrar las tarea completas
    return tarea.filter(tarea => tarea.completado);
}

// Servicio para crear una nueva tarea
export function crearTarea (id, titulo, descripcion, completado = false) {
    // obtener todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    //Crear una nueva instancia del modelo tarea
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
    // Valida quye la tarea tenga un titulo valido
    nuevaTarea.validar();
    //Añadir ña nueva tarea a la lista de tareas
    tareas.push(nuevaTarea);
    //Guardar la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}

//Servicio para marcar una tarea como completada
export function completarTarea(id) {
    //obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    //Encuestra la tarea por id
    const tarea = tareas.find(tarea => tarea.id === id);
    //Si la tarea existe, la marca como completada
    if (tarea) {
        tarea.completar();
        //Guardar los combios en el archivo
        tareaRepo.guardar(tarea);
    }
}

// Servicio para eliminar una tareea
export function eliminarTarea(id) {
    //obtener todas las tareas
    let tareas = tareaRepo.obtenerTodas();
    //eliminar la tarea que coincida con el id
    tareas = tareas.filter(tarea => tarea.id !== id);
    //Guardar la lista actualizada de tareas
    tareaRepo.guardar(tareas);
}