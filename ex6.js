function memoize(fn) {
    var cache = {}
  
    return function(x) {
      if (x in cache) {
        return cache[x]
      } else {
        var r = fn(x)
        cache[x] = r
        return r
      }
    }
  }
  

  // usando a funcao

  function quadrado(n) {
    console.log("calculando...")
    return n * n
  }
  
  var memo = memoize(quadrado)
  
  console.log(memo(5)) // calcula
  console.log(memo(5)) // usa cache
  console.log(memo(6)) // calcula
  