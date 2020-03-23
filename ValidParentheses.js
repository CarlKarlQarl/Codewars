validParentheses = parens => {
    let balance = 0
    let tooManyClose = false
    let parensArray = parens.split("")
    
    for(let paren of parensArray){
      if(paren == "("){
        balance = balance + 1
      }
      if(paren == ")"){
        balance = balance - 1
      }
      if(balance < 0){
        tooManyClose = true
        break
      }
    }
    if(tooManyClose){
      return false
    }else{
      return balance == 0 ? true : false
    }
}