import fs from 'fs'; // Importamos el modulo del sistema de archivo de node.js
import path from 'path'; // Modulo para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Para las rutas del archivo actual
//Importamos la intefaz de persistencia
import TareaDataSource from './tareaRepositorySource.mjs';
import Tarea from '../models/tarea.mjs'; //Importamos el modelo Tarea

// Obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../tarea.txt');

//Implementación concreta que extiende la interfaz tareasDataSource
export default class tareaRepository extends TareaDataSource {
    constructor() {
        super(); //Lamada al contructor de la clase base
    }

    //Implementacion del método obtenerTodas()
    obtenerTodas() {
        try {
            //Leer el archivo de texto en formato utf-8
            const data = fs.readFileSync(filePath, 'utf-8')
            //Convertir el contenido del archivo en un array de objeto JSON
            const tarea = JSON.parse(data);
            //Convertir cada tarea en una instancia de la clase Tarea
            return tarea.map(tareaData => new Tarea (
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ));
        }
        catch (error) {
            //Si ocurre un error, como que el archivo no existe, devolver en un array vacio
            console.log(`Error al leer el archivo de tarea: `. error);
            return[];
        }
    }

    //Implimentacion del medoto guardar()
    guardar(tareas) {
        try {
            //Combertimos el array de tarea a una cadena JOSON con indetación de 2 espacios
            const data = JSON.stringify(tareas, null, 2);
            //Guardar la cadena JSON en el archivo de texto
            fs.writeFileSync(filePath, data, 'utf-8');
        }
        catch (error) {
            //Si ocurre un error al guardar los datos, mostramos el error
            console.error(`Error al guardar las tareas: `, error);
        }
    }

    //Implimentacion del metodo eliminar
    eliminar (id) {
        try {
            //obtener todoas las tareas existentes
            const tareas = this.obtenerTodas()
            //Filtrar la tarea por ID
            const tareaActualizada = tareas.filter(tareas => tareas.id !== id);
            //Guardar lista actualizada
            this.guardar(tareaActualizada);
        }
        catch (error) {
            console.error(`Error al eliminar la tarea: `. error)
        }
    }
}