function nomesOrdenados(produtos) {
    var ordenado = produtos.sort(function(a, b) {
      return a.preco - b.preco
    })
  
    var nomes = ordenado.map(function(p) {
      return p.nome
    })
  
    return nomes
  }

  
// exemplo de uso
  var produtos = [
    { nome: "banana", preco: 5 },
    { nome: "maçã", preco: 3 },
    { nome: "laranja", preco: 4 }
  ]
  
  console.log(nomesOrdenados(produtos)) // ["maçã", "laranja", "banana"]
  