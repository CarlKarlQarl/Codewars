solve = str => {
    let sortedArray = str.split("").sort()
    for (let i = 0; i < sortedArray.length; i++){
      if (sortedArray[i + 1] && sortedArray[i].charCodeAt(0) + 1 !== sortedArray[i + 1].charCodeAt(0)){
        return false
      }
    }
    return true
  }