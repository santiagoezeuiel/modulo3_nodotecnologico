import { threadCpuUsage } from "node:process";

// Definir una clase obstrracta que actue como interfaz para persistencia de datos
export default class TareaDataSource {
    //Metodo obstracto para obtener todas las tareas
    obtenerTodas() {
        throw new Error(`El metodo debe ser implementado por la subclase`);

    }

    //Metodo abstracto para guardar todas las tareas
    guardar(tareas) {
        throw new Error (`Este metodo debe ser implementado por la subclase`);
    
    }

    //Metodo ostracto para eliminar una tarea por su ID
    eliminar (id) {
        throw new Error (`Este método debe ser implementado por la subclase`);
    }
}