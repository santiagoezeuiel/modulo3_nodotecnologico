import { leerSuperheroes, agregarSuperheroes } from "./utlisfinal.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarsuperheroes.txt';

//Agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//Leer y mostrar la lista actualizada de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log(`Suoperheroes ordenados`);
console.log(superheroes);

