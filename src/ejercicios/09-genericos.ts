// Declaracion de un tipo generico <T>
// Esto permite que a la hora de llamar la funcion especificar que tipo de dato retorne. 

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo')
let soyNumero = queTipoSoy(100)
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8,9,10])
let soyExplicito = queTipoSoy<number>(100)
