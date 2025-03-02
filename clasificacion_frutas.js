// Declarar un arreglo llamado frutas
const frutas = [
  "manzana", "pera", "manzana", "naranja", "plátano", "manzana", "pera", "naranja", "plátano", "plátano"
];

// Crear un objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

// ciclo for
for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  if (conteoFrutas[fruta]) {
    conteoFrutas[fruta]++;
  } else {
    conteoFrutas[fruta] = 1;
  }
}

console.log("Conteo usando for:", conteoFrutas);

// Reiniciar el objeto para la segunda solución
const conteoFrutasWhile = {};

//ciclo while
let index = 0;
while (index < frutas.length) {
  const fruta = frutas[index];
  if (conteoFrutasWhile[fruta]) {
    conteoFrutasWhile[fruta]++;
  } else {
    conteoFrutasWhile[fruta] = 1;
  }
  index++;
}

console.log("Conteo usando while:", conteoFrutasWhile);
