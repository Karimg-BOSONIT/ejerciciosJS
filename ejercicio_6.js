// Crea una función que redondee un número float a un número específico de decimales. 
// La función debe tener dos parámetros: 
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()

// Ejemplo de uso de la función:
/*
const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12
const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457 
*/


//REPASO
function roundTo(number, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(number * factor) / factor;
}


//ORIGINAL 
const roundTo = (decimal, round) => {
  
    let array = decimal.toString().split("").join("")
    
    let number1 = array.slice(0,1)
    let decimalNum = array.slice(2,array.length)
    let number3 = decimalNum.substring(0, round)
    
    return result = Number(number1 + "." + number3)
    
}

roundTo(2.123, 2)