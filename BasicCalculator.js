calculate = (num1, operation, num2) => {
    if (operation == "/" &&  num2 == 0 ){
      return null
    }
  
    let operatorDispatch = {
      "+": num1 + num2,
      "-": num1 - num2,
      "*": num1 * num2,
      "/": num1 / num2
    }
    
    let result = operatorDispatch[operation]
    return isNaN(result) ? null : result
}