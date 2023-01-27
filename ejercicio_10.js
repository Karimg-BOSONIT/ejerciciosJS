// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.

// Ejemplo de uso de la función:
// const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
// console.log(result); // lorem ipsum

const ejemplo = '<div><span>lorem</span> <strong>ipsum</strong></div>';

//REPASO
function removeHTMLTags(str) {
  return str.replace(/<[^>]*>/g, "");
}

//ORIGINAL
const removeHtml = (string) =>{
  let array = string.split("")
  let aux = 0;
  let result = []
  for(let i=0; i < array.length; i++){
    if(array[i] === '<'){
      aux += 1;
    }
    if(array[i] === '>'){
      aux -= 1;
    }
    if(aux === 0 && array[i] !== '>'){
      result.push(array[i])
    }
  }
  console.log(result.join(""))
}

removeHtml(ejemplo)