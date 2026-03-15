// Funcion para rederizar una lista de trareas en formato JSON
export function renderizarListaTarea(tareas) {
    //Formato array de tareas en formato JSON con indestación
    return JSON.stringify(tareas, null, 2);
}

//Funcion para renderizar un mensaje generico en formato JSON
export function renderizarMensaje(mensaje) {
    //Evuelve un mensaje en formato JSON
    return JSON.stringify({mensaje}, null, 2);
}

//Funcion para renderizar una tarea especifica en formato JSON
export function renderizarTarea(tarea) {
    //Formatea una tarea individual en formato JSON con indentacion
    return JSON.stringify(tarea, null, 2);
}