//Objeto1
const producto = {
    nombre:"Android",
    precio:100,
    disponible:false
}

//Objeto2
const cliente = {
    nombre:"Andy",
    premium:true,
//Objeto3 (dentro de otro objeto)
    direccion:{
        calle: "Av. Luna"
    }
}


//UNIR 2 OBJETOS
const carritoCompras = {
    cantidad:1,
    // spread operator ...
    ...producto //Hace referencia a objeto y hereda las propiedades de producto
}
console.log(carrito.nombre) //Da el nombre de producto




//Junta los 2 objetos plano (sobreescribe variables que se llamen igual)
const nuevoObjeto = {
    ...producto,
    ...cliente
}
//console.log(nuevoObjeto)

const nuevoObjeto3 = Object.assign(producto, cliente)
console.log(nuevoObjeto3)



//Separa los objetos con cada una de sus propiedades
const nuevoObjeto2 = {
    producto,
    cliente
}
console.log(nuevoObjeto2)