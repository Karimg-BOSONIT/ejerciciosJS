//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']


//Manualmente
const getTruthy = (arr) => {
  let result = arrDirty.filter(value => value == true);
  console.log(result)
}

getTruthy(arrDirty);