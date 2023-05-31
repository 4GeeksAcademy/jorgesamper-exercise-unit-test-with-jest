// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };




// ejercicio 8

// one euro is:
 let oneEuroIs = {
     "JPY": 127.9, // japan yen
     "USD": 1.2, // us dollar
     "GBP": 0.8, // british pound
 }

 function fromDollarToYen(dollarAmount) {
    let yenAmount = dollarAmount * oneEuroIs["JPY"];
    return yenAmount;
  }
  
  function fromEuroToDollar(euroAmount) {
    let dollarAmount = euroAmount * oneEuroIs["USD"];
    return dollarAmount;
  }
  
  function fromYenToPound(yenAmount) {
    let poundAmount = yenAmount * oneEuroIs["GBP"];
    return poundAmount;
  }
  
  //imprimimos resultado
  console.log(fromEuroToDollar(1)); // Convertir 1 euro a dólares
  module.exports = { fromEuroToDollar };

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }