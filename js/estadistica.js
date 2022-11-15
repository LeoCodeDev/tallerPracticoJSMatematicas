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
btnCalcularPromedio.addEventListener("click", fnCalcularPromedio);
btnCalcularMediana.addEventListener("click", fnCalcularMediana);
btnCalcularModa.addEventListener("click", fnCalcularModa);

let arrSueldos = [];

class PlatziMath {
  calcularPromedio(lista) {
    const mediaAritmetica =
      lista.reduce((ante, actu) => {
        return ante + actu;
      }) / lista.length;
    return `El promedio es ${mediaAritmetica.toFixed(2)}`;
  }

  static esPar(arr) {
    return !(arr.length % 2);
  }

  static calcularMediana(lista) {
    let calculoMediana;
    lista.sort((a, b) => a - b); // Aqui es donde ordeno el arreglo
    if (esPar(lista)) {
      valor1 = lista.length / 2;
      valor2 = lista.length / 2 - 1;
      calculoMediana = (lista[valor1] + lista[valor2]) / 2;
      return `La mediana es ${calculoMediana}`;
    } else {
      calculoMediana = lista[Math.floor(lista.length / 2)];
      return `La mediana es ${calculoMediana}`;
    }
  }

  calcularModa(listas) {
    const cuenta = {};

    listas.forEach((lista) => {
      if (cuenta[lista]) {
        cuenta[lista] += 1;
      } else {
        cuenta[lista] = 1;
      }
    });
    const cuentaArr = Object.entries(cuenta);

    cuentaArr.sort((a, b) => b[1] - a[1]);

    if (cuentaArr[0][1] === cuentaArr[1][1]) {
      return `No hay moda`;
    } else {
      return `La moda es: ${cuentaArr[0][0]} y la cantidad de veces fue ${cuentaArr[0][1]}`;
    }
  }
}

function enviarSueldo() {
  arrSueldos.push(parseInt(salario.value));
  salarios.innerHTML += `${salario.value} `;
}

function calcularPromedio(lista) {
  const mediaAritmetica =
    lista.reduce((ante, actu) => {
      return ante + actu;
    }) / lista.length;
  return `El promedio es ${mediaAritmetica.toFixed(2)}`;
}

function fnCalcularPromedio() {
  let outPut = calcularPromedio(arrSueldos);
  promedio.innerHTML = outPut;
}

function esPar(arr) {
  return !(arr.length % 2);
}

function calcularMediana(lista) {
  let calculoMediana;
  lista.sort((a, b) => a - b); // Aqui es donde ordeno el arreglo
  if (esPar(lista)) {
    valor1 = lista.length / 2;
    valor2 = lista.length / 2 - 1;
    calculoMediana = (lista[valor1] + lista[valor2]) / 2;
    return `La mediana es ${calculoMediana}`;
  } else {
    calculoMediana = lista[Math.floor(lista.length / 2)];
    return `La mediana es ${calculoMediana}`;
  }
}

function fnCalcularMediana() {
  let outPut = calcularMediana(arrSueldos);
  mediana.innerHTML = outPut;
}

function calcularModa(listas) {
  const cuenta = {};

  listas.forEach((lista) => {
    if (cuenta[lista]) {
      cuenta[lista] += 1;
    } else {
      cuenta[lista] = 1;
    }
  });
  const cuentaArr = Object.entries(cuenta);

  cuentaArr.sort((a, b) => b[1] - a[1]);

  if (cuentaArr[0][1] === cuentaArr[1][1]) {
    return `No hay moda`;
  } else {
    return `La moda es: ${cuentaArr[0][0]} y la cantidad de veces fue ${cuentaArr[0][1]}`;
  }
}

function fnCalcularModa() {
  let outPut = calcularModa(arrSueldos);
  moda.innerHTML = outPut;
}
