import fs from 'fs';

// Clase para representar un superheroe
class SuperHeroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSocial, edad, planetaOrigen,
        debilidad, poder, habilidadEspecial, aliado, enemigo) {

            this.id = id;
            this.nombreSuperheroe = nombreSuperheroe;
            this.nombreReal =  nombreReal;
            this.nombreSocial = nombreSocial;
            this.edad = edad;
            this.planetaOrigen =  planetaOrigen;
            this.debilidad =  debilidad;
            this.poder  = poder;
            this.habilidadEspecial = habilidadEspecial;
            this.aliado = aliado;
            this.enemigo = enemigo
        }
}

//Funcion para leer y ordenar los superheroes;
export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    //Convertir a intancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new SuperHeroe(hero.id, hero.nombreSuperheroe, hero.nombreSocial, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo
        ));

        //Ordenar por nombre de Superheroes
        superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare (b.nombreSuperheroe));

        return superheroes;
}

// Convertir los nuevos superheroes a instancias de superheroes
export function agregarSuperheroes(rutaOriginal, rutaNueva) {

    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNueva, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevoSuperheroes = JSON.parse(datosNuevos)

    const instanciaNuevos = nuevoSuperheroes.map (
        hero => new SuperHeroe(hero.id, hero.nombreSuperheroe, hero.nombreSocial, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo
        ));

    // Combianar lista
    const listaActualizada = [...superheroesOriginales, ...instanciaNuevos];

    // Guardae la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
    console.log(`Lista de superheroes actuializada con exito`);
}