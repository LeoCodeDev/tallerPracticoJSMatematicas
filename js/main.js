

function calcularAlturaEscaleno(lado1,lado2,lado3){
    let lados = [lado1,lado2,lado3]
    lados.sort(function(a,b){return a - b})
    let menor = lados[0];
    let mayor = lados[1];
    let base = lados[2]
    console.log(lados)
    
    if(menor === mayor && menor === base){
        console.warn('Este Triangulo es un Equilatero')
    }else if(menor !== mayor && mayor !== base && menor !== base){
        console.warn('Este triangulo es un Escaleno');
    }else{
        console.warn('Este Triangulo es un Isoseles');
    }
}