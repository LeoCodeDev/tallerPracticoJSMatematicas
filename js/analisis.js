const persona = document.querySelector("#persona");
const btnpersona = document.querySelector("#btn-persona");
btnpersona.addEventListener("click", enviarPersona);
let consulta;

class AnalisisPlatzi {
  static buscarPersona(consulta) {
    return salarios.find((sal) => sal.name === consulta);
  }
}

function enviarPersona() {
  consulta = persona.value;
}