function paresParaObjeto(pares) {
    var obj = {}
  
    for (var i = 0; i < pares.length; i++) {
      var chave = pares[i][0]
      var valor = pares[i][1]
      obj[chave] = valor
    }
  
    return obj
  }
  
  function objetoParaPares(obj) {
    var pares = []
  
    for (var chave in obj) {
      pares.push([chave, obj[chave]])
    }
  
    return pares
  }
  
  // Teste
  var obj = { nome: "Ana", idade: 30 }
  console.log(paresParaObjeto([["nome", "Ana"], ["idade", 30]]))
  console.log(objetoParaPares(obj))