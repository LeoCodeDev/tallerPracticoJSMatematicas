const salario = document.querySelector("#salario");
const salarios = document.querySelector("#salarios");
const promedio = document.querySelector("#promedio");
const mediana = document.querySelector("#mediana");
const moda = document.querySelector("#moda");
const btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", enviarSueldo);
const btnCalcularPromedio = document.querySelector("#btnCalcularPromedio");
const btnCalcularMediana = document.querySelector("#btnCalcularMediana");
const btnCalcularModa = document.querySelector("#btnCalcularModa");
btnCalcularPromedio.addEventListener("click", calcularPromedio);
btnCalcularMediana.addEventListener("click", calcularMediana);
btnCalcularModa.addEventListener("click", calcularModa);

let arrSueldos = [];

function enviarSueldo() {
  arrSueldos.push(parseInt(salario.value));
  salarios.innerHTML += `${salario.value} `;
}

function calcularPromedio() {
  const mediaAritmetica =
    arrSueldos.reduce((ante, actu) => {
      return ante + actu;
    }) / arrSueldos.length;
  promedio.innerHTML = `El promedio es ${mediaAritmetica.toFixed(2)}`;
}

function esPar(arr) {
  return !(arr.length % 2);
}

function calcularMediana() {
  let med;
  arrSueldos.sort((a,b)=> a-b) // Aqui es donde ordeno el arreglo
  console.log(arrSueldos)
  if (esPar(arrSueldos)) {
    valor1 = arrSueldos.length / 2;
    valor2 = arrSueldos.length / 2 - 1;
    med = (arrSueldos[valor1] + arrSueldos[valor2]) / 2;
    mediana.innerHTML = `La mediana es ${med}`;
  } else {
    med = Math.floor(arrSueldos.length / 2);
    mediana.innerHTML = `La mediana es ${arrSueldos[med]}`;
  }
}

function calcularModa() {
    const cuenta = {}
    
    arrSueldos.forEach((sueldo) => {
        if (cuenta[sueldo]) {
            cuenta[sueldo] += 1
        } else {
            cuenta[sueldo] = 1
        }
    })
    const cuentaArr = Object.entries(cuenta)
    
    cuentaArr.sort((a,b) => b[1] - a[1])
    
    if (cuentaArr[0][1] === cuentaArr[1][1]) {
        moda.innerHTML = `No hay moda`
    } else {
        moda.innerHTML = `La moda es: ${cuentaArr[0][0]} y la cantidad de veces fue ${cuentaArr[0][1]}`
    }
}
