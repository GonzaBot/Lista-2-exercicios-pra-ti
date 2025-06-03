function debounce(fn, delay) {
    var timer
  
    return function() {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    }
  }
 
  
  // usando a funcao

  function dizOi() {
    console.log("Oi!")
  }
  
  var f = debounce(dizOi, 1000)
  
  f()
  f()
  f() 