
let consulta;
let personalInfo;
let trabajos;
let sueldos;
let medianaSueldos;
let modaSueldos;
let historicoAumento = []
let promedio;
let mediana;
let moda;
const empresas = {}

class AnalisisPlatzi {
  static buscarPersona(obj,consulta) {
    personalInfo = obj.find((sal) => sal.name === consulta);
    return personalInfo
  }

  static datosTrabajos(sal,con){
    trabajos = AnalisisPlatzi.buscarPersona(sal,con).trabajos
    return trabajos
  }

  static aumentoAnual(arr){
    let salarioAnterior
    let salarioActual
    let aumento
    let porcentaje;
    let medianaAumento
    for (let i = 1; i < arr.length; i++) {
      salarioAnterior = arr[i - 1];
      salarioActual = arr[i];
      aumento = salarioActual - salarioAnterior
      porcentaje = aumento / salarioAnterior
      historicoAumento.push(porcentaje)
      medianaAumento = PlatziMath.calcularMediana(historicoAumento)
    }
    debugger
    let proyeccionSalario = (medianaAumento * salarioActual) + salarioActual
    return proyeccionSalario
  }

  static promediosSalario(arr){
    promedio = PlatziMath.calcularPromedio(arr)
    mediana = PlatziMath.calcularMediana(arr)
    moda = PlatziMath.calcularModa(arr)
    
  }

  static medianaSalarioEmpresa(obj,emp,year){
    const medianaEmpresas = PlatziMath.calcularMediana(obj[emp][year])
    return medianaEmpresas
  }
}

function enviarPersona() {
  consulta = persona.value;
  AnalisisPlatzi.buscarPersona(salarios,consulta)
  AnalisisPlatzi.datosTrabajos(salarios,consulta)
}

function extraerSalarios(){
   sueldos = trabajos.map((trabajo) => trabajo.salario)
   return sueldos
}


  for(persona of salarios) {
    for(trabajo of persona.trabajos) {
      if(!empresas[trabajo.empresa]){
        empresas[trabajo.empresa] = {}
      }
      if (!empresas[trabajo.empresa][trabajo.year]) {
        empresas[trabajo.empresa][trabajo.year] = []
      }
      empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
  }
