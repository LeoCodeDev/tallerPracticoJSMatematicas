const PlatziMath = {}
let arrSueldos = [];

function enviarSueldo() {
  arrSueldos.push(parseInt(salario.value));
  sueldos.innerHTML += `${salario.value} `;
}

function fnCalcularPromedio() {
  let outPut = PlatziMath.calcularPromedio(arrSueldos);
  promedio.innerHTML = outPut;
}

function fnCalcularMediana() {
  let outPut = PlatziMath.calcularMediana(arrSueldos);
  mediana.innerHTML = outPut;
}

function fnCalcularModa() {
  let outPut = PlatziMath.calcularModa(arrSueldos);
  moda.innerHTML = outPut;
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  const mediaAritmetica =
    lista.reduce((ante, actu) => {
      return ante + actu;
    }) / lista.length;
  return `El promedio es ${mediaAritmetica.toFixed(2)}`;
}

PlatziMath.esPar = function esPar(arr) {
  return !(arr.length % 2);
}

PlatziMath.calcularMediana = function calcularMediana(lista) {
  let calculoMediana;
  lista.sort((a, b) => a - b); // Aqui es donde ordeno el arreglo
  if (PlatziMath.esPar(lista)) {
    valor1 = lista.length / 2;
    valor2 = lista.length / 2 - 1;
    calculoMediana = (lista[valor1] + lista[valor2]) / 2;
    return `La mediana es ${calculoMediana}`;
  } else {
    calculoMediana = lista[Math.floor(lista.length / 2)];
    return `La mediana es ${calculoMediana}`;
  }
}

PlatziMath.calcularModa = function calcularModa(listas) {
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