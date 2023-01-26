// Crea una función que convierta un número de bytes 
// en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

// La función debe tener 2 parámetros:

// Primer parámetro debe ser el número de bytes

// Segundo parámetro debe ser un número especificando la cantidad de dígitos 
// a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). 
// Por defecto, este parámetro debe de tener un valor de 3.

function format(bytes, digits = 3) {
  
    const isNegative = bytes < 0;
    if (isNegative) bytes = -bytes;
    
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let unitIndex = 0;
    while (bytes >= 1000 && unitIndex < units.length - 1) {
      bytes /= 1000;
      unitIndex++;
    }
    
    result = bytes.toPrecision(digits)
    if(isNegative) result = "-"+result
    return `${result} ${units[unitIndex]}`;
  }
  
  format(-12145489451.5932, 5)