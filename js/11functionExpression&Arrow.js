//Function Expression - primero ejecuta la variable const > funcion

//sumarExpression()  X NO se puede antes

const sumarExpression = function(numero1 = 0 , numero2=0){
    console.log(numero1 + numero2)
}
sumarExpression(70+20) // CORRECTO



//Arrow Function =>
// 1 LINEA
const sumar1Arrow = (numero1 = 0 , numero2=0) => console.log(numero1 + numero2)
sumar1Arrow(100,30)

// +2 LINEAS
const sumar2Arrow = (numero1 = 0 , numero2=0) => {
    console.log(numero1 + numero2)
}
sumar2Arrow(200,70)
