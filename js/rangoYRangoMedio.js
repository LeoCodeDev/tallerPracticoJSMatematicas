const valores = [5, 9, 16, 21, 8, 91, 23, 45, 36, 3, 1, 72, 84, 12, 54]

valores.sort((a,b) => a - b) // Ahora tenemos que valores = [1, 3, 5, 8, 9, 12, 16, 21, 23, 36, 45, 54, 72, 84, 91]

const maxNum = valores.length - 1 // 14
const minNum = 0
const rango = valores[maxNum] - valores[minNum] // rango = valores[14] - valores[0] = 91 - 1 = 90
const rangoMedio = (valores[maxNum] + valores[minNum]) / 2 // rango = (valores[14] + valores[0]) / 2 = (91 + 1) / 2 = 92 / 2 = 46