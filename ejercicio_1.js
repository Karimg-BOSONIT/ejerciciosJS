// Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

//Una forma, manualmente
const getObj = (id) => {
  for (let i in arrNames) {
    if (arrNames[i].id == id) {
        console.log(arrNames[i])
      return arrNames[i];
    }
  }
};

getObj(4);

//Otra forma mediante find/filter
const getObjDos = (id) => {
    let result = arrNames.find(obj => obj.id == id);
        console.log(result);
    return result;
}

getObjDos(3);