function fatorial(n) {
    if (n < 0) {
      throw new Error("n não pode ser negativo")
    } else if (n === 0) {
      return 1
    } else {
      return n * fatorial(n - 1)
    }
  }
  
  console.log(fatorial(5)) // 120
  