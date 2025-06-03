var txt = "olá olá mundo mundo"
var palavras = txt.split(" ")
var unicas = []

for (var i = 0; i < palavras.length; i++) {
  var p = palavras[i]
  var cont = 0

  for (var j = 0; j < palavras.length; j++) {
    if (palavras[j] === p) {
      cont++
    }
  }

  if (cont === 1) {
    unicas.push(p)
  }
}

console.log(unicas)