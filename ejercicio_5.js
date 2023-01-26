// Dado un array de ciudades, 
// sacar en un nuevo array las ciudades no capitales 
// con unos nuevos parámetros que sean city y isSpain. 
// El valor de isSpain será un booleano indicando si es una ciudad de España.

// Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

//Manual
const getCities = (obj) => {

    let aux = arrCities2.filter(obj => obj.country === 'Spain')
    
    let result = [];

    for(let i in aux){
        delete aux[i].country;
        delete aux[i].capital;
        aux[i].isSpain = true;
        result.push(aux[i]);
    }

    return result;
}
getCities(arrCities2);

//Con un map
const spainCities = arrCities2.filter(city => city.country === 'Spain').map(elem => ({city: elem.city, isSpain: true}));

console.log(spainCities)