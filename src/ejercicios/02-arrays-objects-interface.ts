let habilidades: string[] = ['Bash', 'Counter', 'Healing']

interface Personaje {
    nombre: string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string; // Esta propiedad es opcional "?"
}

const personaje:Personaje = {
    nombre: 'Anthony',
    hp:100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje)