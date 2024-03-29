//destructuracion de objetos

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;

}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    },
}

const { volumen, segundo, cancion, detalles } = reproductor;
// const { volumen, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor; // Opcional, en caso que ya exista la propiedad autor
const { autor } = detalles

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El cancion actual de: ', cancion);
console.log('El autor actual: ', autor);


//destructuracion de arreglos
const dbz:string[] = ['Goku', 'Vegeta', 'Trunks']
const [p1, p2, p3] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);

const [, , p4] = dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p4);


