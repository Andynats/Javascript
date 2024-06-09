let cliente

//Averiguar el tipo de dato de una variable
console.log(typeof cliente)

console.log(2+2)

//Objeto
const producto = {
    nombre:"Andy",
    años:25
}

console.log(producto)

//Ingresar 1 dato a la tabla
console.table({nombre:"sofia",años:26});



//Object Literal Enhacement
const auth=true
const user="Andy"

const nuevoObjeto={
    auth, //Solo si ambos se llaman IGUAL (auth:auth) -> es lo mismo
    usuario:user
}