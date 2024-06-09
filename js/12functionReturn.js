// Funcion retornando valores - Separar el código

//Function Declaration
function sumarDeclaration (numero1 = 0 , numero2=0){
    return numero1+numero2
}

const resultadoSuma2 = sumarExpression(100,20)
console.log(`Declaration: ${resultadoSuma2}`)



//Function Expression
const sumarExpression = function (numero1 = 0 , numero2=0) {
    return numero1 + numero2
}
//Sacar el dato de la funcion permite hacer validaciones adicionales y usarlo en otras partes
const resultadoSuma = sumarExpression(10,20)
console.log(`Expression: ${resultadoSuma}`)



//Arrow => return implicito
const sumar1Arrow = (numero1 = 0 , numero2=0) => numero1 + numero2

const resultadoSuma3 = sumar1Arrow(800,20)
console.log(`Arrow: ${resultadoSuma3}`)
