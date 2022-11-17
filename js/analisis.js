
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
    let proyeccionSalario = (medianaAumento * salarioActual) + salarioActual
    return proyeccionSalario
  }

  static promediosSalario(arr){
    promedio = PlatziMath.calcularPromedio(arr)
    mediana = PlatziMath.calcularMediana(arr)
    moda = PlatziMath.calcularModa(arr)
    
  }

  static medianaSalarioEmpresa(obj,emp,year){
    let medianaEmpresas
    if (!obj[emp]) {
      console.warn(`Empresa ${emp} no existe`)
    } else if(!obj[emp][year]){
      console.warn(`Empresa ${emp} no tuvo actividad en ${year}`)
    }else{
      medianaEmpresas = PlatziMath.calcularMediana(obj[emp][year])
    }
    return medianaEmpresas
  }

  static medianaTotalEmpresa(obj,emp){
    const medianasSalarios = []
    const empConsultar = obj[emp]
    for (let year in empConsultar) {
      const medianaEmpresas = PlatziMath.calcularMediana(empConsultar[year])
      medianasSalarios.push(medianaEmpresas)
    }
    return medianasSalarios 
  }

  static proyeccionSalarioEmpresasAnual(obj,emp){
    const medianasSalarios = AnalisisPlatzi.medianaTotalEmpresa(obj,emp)
    const salarioProyectado = AnalisisPlatzi.aumentoAnual(medianasSalarios)
    return salarioProyectado
  }

  static salariosTotal(obj){
    const arrSueldos = []
    for(let persona of obj){
      let trabajos = persona.trabajos
      for(let payment of trabajos){
          arrSueldos.push(payment.salario)
      }
    }
    return arrSueldos
  }

  static medianaSalariosTotal(obj){
    const arrMedianas = []
    for(let persona of obj){
      const arrSueldos = []
      let trabajos = persona.trabajos
      for(let trabajo of trabajos){
        arrSueldos.push(trabajo.salario)
      }
      arrMedianas.push(PlatziMath.calcularMediana(arrSueldos))
    }
    return arrMedianas
  }

  static medianaTotal(obj){
    const salariosGlobal = AnalisisPlatzi.salariosTotal(obj)
    return PlatziMath.calcularMediana(salariosGlobal)
    
  }

  static medianaTop10(obj){
    const arrSueldos = AnalisisPlatzi.medianaSalariosTotal(obj)
    arrSueldos.sort((a, b) => b - a)
    const top10 = parseInt(Math.floor(arrSueldos.length * 0.1))
    console.log(top10)
    const arrTop10 = arrSueldos.slice(0,top10)
    return arrTop10
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
