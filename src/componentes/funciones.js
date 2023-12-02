

//No es un componente, sólo vemos el paso de parámetros a funciones
function Sumar() {

    let uno = 1500
    let dos = 3500

    let resultado = uno + dos

    console.log(`El resultado de la suma es ${resultado}`);
    
}

Sumar()


function Restar(a, b) {
    
    let resultado = a - b;
    
    console.log(`El resultado de la suma es ${resultado}`);

}

Restar(8000, 5000)


const Multiplicar = (x, y) => {

    let resultado = x * y;
    
    console.log(`El resultado de la suma es ${resultado}`);

}

Multiplicar(8000, 5000)