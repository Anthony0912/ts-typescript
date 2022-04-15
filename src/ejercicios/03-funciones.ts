function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// Orden de envio de parametros
// 1. parametros obligatorios
// 2. parametros opciones
// 3. parametros con valor por defecto
function mutiplicar(numero: number, otroNumero?: number, base: number = 2): number { 
    return numero * base;
}

const resultado: number = mutiplicar(10, 20);

console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv:number;
    mostrarHp:() => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre:'Anthony',
    pv:50,
    mostrarHp():void {
        console.log('Puntos de vida: ', this.pv);
    }
}
curar(nuevoPersonaje, 20)
nuevoPersonaje.mostrarHp();
