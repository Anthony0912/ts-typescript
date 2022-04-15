export interface Producto {
    desc:string;
    precio:number;
}

const telefono:Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta:Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calcularISV(productos:Producto[]):[number, number] {

    let total:number = 0;
    
    productos.forEach(({ precio }):void => {
        total += precio;
    })
    return [total, total * 0.15];
    
}

// const articulos:Producto[] = [telefono, tableta];

// const [total, isv]:[number, number] = calcularISV(articulos);

// console.log('Total: ', total);
// console.log('ISV: ', isv);
