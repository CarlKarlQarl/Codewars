solve = (a,b) => {
    //I'm trying to test recursion, not JavaScript's call stack size
    if (a >= 100000000000){
      a = a / 10000000
    }
    if (b >= 100000000000){
      b = b / 10000000
    }
    
    if (a == 0 || b == 0){
      return [a, b]
    }
    else if (a >= b * 2){
      a = a - (b * 2)
      return solve(a, b)
    }
    else if (b >= a * 2){
      b = b - (a * 2)
      return solve(a, b)
    }
    else {
      return [a, b]
    }
}