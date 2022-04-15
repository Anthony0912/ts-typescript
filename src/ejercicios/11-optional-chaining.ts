interface Pasajero {
    nombre:string
    hijos?:string[]
}

const pasajero1: Pasajero = { nombre: "Anthony" }
const pasajero2: Pasajero = { nombre: "Gabriel", hijos: ["Natalia", "Jason"] }

function imprimirHijos(pasajero: Pasajero):void {
    const cuantosHijos = pasajero.hijos?.length ?? 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
