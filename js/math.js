function calcularAlturaEscaleno(lado1,lado2,lado3){
    
    if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
        return false
    }else{
        let semiPerimetro = (lado1 + lado2 + lado3) / 2
        let area = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))
        let altura = ((area * 2) / lado1)
        return Math.floor(altura)
    }
}