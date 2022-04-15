class Heroe {
    // private alterEgo:string;  // private: Solo es visible dentro de la clase Heroe
    // public edad:number;       // public: Cualquiera va apoder ver la propiedad
    // static nombreReal:string; // static: Se va a poder acceder a la propiedad sin crear una instancia de la clase sin crear una instancia 
    
    alterEgo:string;
    edad:number;
    nombreReal:string;
    

}

const ironman = new Heroe()

console.log(ironman);
