//FUNCTION - REUTILIZAR código

//Declarar la funcion
function sumarFacil(){
    console.log(1+1)
}
//Usar la funcion
console.log("Suma facil:")
sumarFacil()



//Funciones INTELIGENTES => parametros dinamicos ingresados externamente
//            (parametro1 , parametro2)
function sumar (numero1 , numero2){
    console.log(numero1 + numero2)
}
//   (argumento , argumento2)
console.log("\nSuma 2 parametros:")
sumar(10,100)



//Valores por DEFAULT
function sumarDefault (numero1 = 0 , numero2=0){
    console.log(`\nValores default
numero1 = ${numero1}
numero2 = ${numero2}\n
Suma total es: ${numero1 + numero2}`)
}

//   (argumento , argumento2)
sumarDefault(10)

//NaN - Not a Number