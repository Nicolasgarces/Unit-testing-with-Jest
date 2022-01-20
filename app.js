// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

let fromEuroToDollar = function(euroValue){
    return euroValue * 1.2;
}

let fromDollarToYen = function(dollarValue){
    return dollarValue * 127.9;
}

let fromYenToPound = function(yenValue){
    return yenValue * 0.8;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };



