//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

const getCities = (obj) => {
    let result = arrCities.filter(obj => obj.capital == true)
    console.log(result)
    return result;
}
getCities(arrCities);