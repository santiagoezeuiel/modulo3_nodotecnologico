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