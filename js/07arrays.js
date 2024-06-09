//Validar si un metodo MUTA o NO  https://doesitmutate.xyz/

//Array[] -> Listado
//Indices               0   ,      1     ,      2
const tecnologias = ['Cisco', 'Sonicwall', 'Javascript']
console.log(tecnologias) //Obtener el lenght
console.table(tecnologias)

console.log(`Yo estoy aprendiendo: ${tecnologias[2]}! :3`)



//Metodo push - Agregar al final del Array -> MUTA (Modifica el arreglo original)
// tecnologias.push('HTML')

// A G R E G A R   al final del array - NO MUTA React
const newArrayTecnologias = [...tecnologias,'HTML']
console.table(`NO muta: ${newArrayTecnologias}`)




// E L I M I N A R   un valor del array 
//tecnologias.shift('Cisco') -> MUTA

// NO MUTA                                       tech2 = variable que Accede a cada elemento del arreglo
const tecnologias2 = tecnologias.filter(function(tech2){
    if (tech2 !== 'Cisco'){
        return tech2
    }
})
console.table(tecnologias2) //Imprimir el nuevo array sin el valor de CISCO



/* M O D I F I C A R   elementos de un arreglo
.map = acceder y modificar           function = Accede a cada elemento del arreglo*/
const tecnologias3 = tecnologias.map(function(tech3){
    if (tech3 === 'Sonicwall'){
        return 'React' //Nuevo valor
    }else{
        return tech3
    }
})
console.table(tecnologias3) //Se reemplaza Spnicwall por React
