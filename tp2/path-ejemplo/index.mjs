import path from 'path';

// Definir una ruta directorio base
const filePath = './data/example.txt';


// Obtener el directorio base
const dirName = path.dirname(filePath);
console.log(`Direccion base:`, dirName);

// Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log(`Nombre del archivo: `, baseName);

// Obtener la extension del archivo
const extName = path.extname(filePath);
console.log(`Extension del archivo: `, extName);

// Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log(`Bueva rutra: `, newPath);