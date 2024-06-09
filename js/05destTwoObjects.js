//Objeto1
const producto = {
    nombre:"iPhone",
    precio:100,
    disponible:false
}

//Objeto2
const cliente = {
    nombre:"Andy",
    premium:true,
//Objeto3 (dentro de otro objeto)
    direccion:{
        calle: "Av. Mexico"
    }
}

//Destructuring (ambos tienen la variable = nombre)
const { nombre } = producto
const { nombre: nombreCliente } = cliente //Se renombra variable nombre a nombreCliente

//Obtener objeto dentro de otro objeto : {}
const { premium, direccion : { calle }} = cliente

console.log(nombre) //Producto
console.log(nombreCliente)