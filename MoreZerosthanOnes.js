moreZeros = string =>{
    let array = string.split("")
    let uniqueArray = [...new Set(array)]
    
    return uniqueArray.filter(char => {
      let binaryChar = char.charCodeAt().toString(2)
      let binaryArray = binaryChar.split("")
      let sum = binaryArray.reduce((memo, num) => parseInt(memo) + parseInt(num))
      return sum < binaryChar.length / 2 ? true : false
    })
}