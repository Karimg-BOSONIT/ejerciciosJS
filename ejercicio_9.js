// Crea una función que a partir de un objeto de entrada, 
// retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.

// Ejemplo de uso de la función:
// const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = toLowercaseKeys(myObject);
// console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const toLower = (obj) => {
    let newObject = {}
    for(let key in obj){
      newObject[key.toLowerCase()] = obj[key]
    }
  return newObject
  
}
toLower(myObject)