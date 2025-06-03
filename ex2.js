const readline = require('readline-sync')

const n = Math.floor(Math.random() * 100) + 1
let t = 0
let p = 0

while (p !== n) {
  p = parseInt(readline.question("Adivinha o número (1 a 100): "))
  t++
  if (p < n) {
    console.log("Mais alto!")
  } else if (p > n) {
    console.log("Mais baixo!")
  }
}

console.log("Acertou em " + t + " tentativas!")
