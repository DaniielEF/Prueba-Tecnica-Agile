// Manipulación de arrays y funciones en JS

function procesarArray(userArray) {

    const resultado = userArray.map(element =>{
        if (element%2 === 0){
            return element*2
           
        }else{
            return element*3
        }
    })

    console.log('Resultado: ',resultado)

}


procesarArray([1,2,3,4])

// Promesas y manejo de asincronía

async function obtenerDatos() {
    try {
        
    } catch (error) {
        
    }
    
}


// Clases en Javascript

class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
        
    }

    
}

const user = new persona ('Daniel', 28)

console.log(`Hola, soy ${user.nombre} y tengo ${user.edad} años`)