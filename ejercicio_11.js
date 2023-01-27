// Crea una función que tome un array como parametro y lo divida 
// en arrays nuevos con tantos elementos como sean especificados.
// La función debe tener dos parámetros:
// El primer parámetro es el array entero que se quiere dividir.
// El segundo parámetro es el número de elementos que deben tener 
// los arrays en los que se divida el array original del primer parámetro.

// Ejemplo de uso de la función:
// const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

//REPASO
function splitArrayIntoChunks(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

//ORIGINAL
const split = (array, y) => {
    let newArray = [];
    
    for(let i=0; i < array.length; i++){
        newArray.push(array.splice(0,y))
      i = 0;
    }
    array.length > 0 ? newArray.push(array) : null;
    return newArray;
  }
  
  split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14], 3)