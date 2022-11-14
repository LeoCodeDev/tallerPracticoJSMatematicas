const monto = document.querySelector("#monto");
const cupon = document.querySelector("#cupon");
const total = document.querySelector("#total");
const btnCalcular = document.querySelector("#calcular");
btnCalcular.addEventListener("click", calcularDescuento);

class Coupons {
  constructor(call, valor) {
    this.call = call;
    this.valor = valor;
  }
}

const Disc30 = new Coupons("Disc30", 30);
const Disc25 = new Coupons("Disc25", 25);
const Disc20 = new Coupons("Disc20", 20);
const Disc15 = new Coupons("Disc15", 15);

let couponsColection = [];

couponsColection.push(Disc30,Disc25,Disc20,Disc15);

function calcularDescuento() {
  let price = monto.value;
  let inputCoupon = cupon.value;

  const elementFound = couponsColection.find(coup => coup.call === inputCoupon)
  if (elementFound) {
    let finalPrice = (price * (100 - elementFound.valor)) / 100;
      total.innerHTML = `
      Tu producto tenia un precio de $${price}, pero con el super descuento de ${elementFound.call}, pagaras $${finalPrice}, Felicidades, te estas ahorrando $${price - finalPrice}
      `;
  } else {
    total.innerHTML = `
        El cupon ingresado no es valido, por favor, verifica e intenta nuevamente.
        `;
  }
}