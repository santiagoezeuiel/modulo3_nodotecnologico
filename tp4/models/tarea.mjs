
export default class Tarea{
    constructor(id, titulo, descripcion, completado = false) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion =  descripcion;
        this.completado = completado
    }

    //Metodopara marcar una tarea como completada
    completar() {
        this.completado = true; //Cambiar el estado de completdo a true
    }

    //Metodo para cvalidad que el titulo de la tarea no esta vacio
    validar() {
        if (!this.titulo || this.titulo.trim() === '') {
            throw new Error(`El titulo de la tarea es obligatorio`);
        }
    }
}