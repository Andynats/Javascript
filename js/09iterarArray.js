//Indices               0   ,      1     ,      2    ,      3
const tecnologias = ['Cisco', 'Sonicwall', "Fortinet", 'Javascript']

/*
    for(let i = 0; i < tecnologias.lenght; i++){
        console.log( tecnologia[i] )
    }
*/


//forEach  - R E C O R R E R (iterar por cada elemento en el array)
tecnologias.forEach(function(foreachxTecnologia){
    console.log(`forEach: ${foreachxTecnologia}`)
})


// for ... of   + BREVE que forEach 
for(let for_ofxTecnologia of tecnologias){
    console.log(`for ... of - ${for_ofxTecnologia}`)
}



//map - C R E A R  nuevo arreglo con los elementos
const arrayMap = tecnologias.map(function(mapArray){
    return mapArray
})
console.log(`map - NUEVO ARRAY: ${arrayMap}`)