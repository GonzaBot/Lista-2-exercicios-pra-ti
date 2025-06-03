function ehDataValida(d, m, a) {
    if (d < 1 || m < 1 || m > 12 || a < 1) return false
  
    var b = (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)
    var dm = [31, b ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
    return d <= dm[m - 1]
  }
  

  console.log(ehDataValida(29, 2, 2024)) // true
console.log(ehDataValida(31, 4, 2023)) // false
console.log(ehDataValida(30, 6, 2022)) // true
