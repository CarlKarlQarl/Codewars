simplify = number => {
    let numArray = number.toString().split("")
    let output = ""
    numArray.forEach((num, index) => {
      if(num === "0"){
        output += ``
      }else if(numArray.length === index + 1){
        output += `${num}`
      }else{
        output += `${num}*${Math.pow(10, numArray.length - index - 1)}+`
      }
    })
    return output[output.length - 1] === "+" ? output.slice(0, - 1) : output
}