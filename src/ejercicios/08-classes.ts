class PersonaNormal {

    constructor(public nombre: string, public direccion: string) { } 
}

class Heroe extends PersonaNormal {
    // private alterEgo:string;  // private: Solo es visible dentro de la clase Heroe
    // public edad:number;       // public: Cualquiera va apoder ver la propiedad
    // static nombreReal:string; // static: Se va a poder acceder a la propiedad sin crear una instancia de la clase sin crear una instancia 
    
    // alterEgo:string;
    // edad:number;
    // nombreReal:string;

    constructor(public alterEgo: string, public edad: number, public nombreReal:string) {
        super(nombreReal, 'New York, USA')
    }
}

const ironman = new Heroe('Ironman', 45, 'Tonny');

console.log(ironman);