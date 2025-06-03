function agrupar(vendas) {
    return vendas.reduce(function(obj, v) {
      if (obj[v.cliente]) {
        obj[v.cliente] += v.total
      } else {
        obj[v.cliente] = v.total
      }
      return obj
    }, {})
  }

  // probando

  var vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "João", total: 50 },
    { cliente: "Ana", total: 70 },
    { cliente: "Ana", total: 70 }
  ]
  
  console.log(agrupar(vendas))
  // Resultado: { Ana: 240, João: 50 }
  