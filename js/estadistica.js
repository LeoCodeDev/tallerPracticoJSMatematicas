const salario = document.querySelector("#salario");
const salarios = document.querySelector("#salarios");
const promedio = document.querySelector("#promedio");
const mediana = document.querySelector("#mediana");
const moda = document.querySelector("#moda");
const btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", enviarSueldo);
const btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcularPromedio);

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

function calcularModa() {}
