// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };


//START EXERCISE:

// one euro is:
 let oneEuroIs = {
     "JPY": 127.9, // japan yen
     "USD": 1.2, // us dollar
     "GBP": 0.8, // british pound
 }

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    valueInDollar = oneEuroIs.USD;
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    valueInYen = oneEuroIs.JPY
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound };
