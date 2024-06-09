//JAVASCRIPT
//Objeto{}
const producto = {
    nombre:"iPhone",
    precio:100,
    disponible:false
}

//Override un objeto
producto.disponible = true

//Agregar propiedad
producto.imagen = "imagen.jpg"

//Eliminar propiedad
delete producto.precio

//Bloquear el objeto en totalidad
Object.freeze(producto)

//Modificar propiedades existentes, pero NO permite añadir/eliminar
Object.seal(producto)


console.log(producto)
