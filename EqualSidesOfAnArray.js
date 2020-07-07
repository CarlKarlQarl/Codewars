findEvenIndex = array => {
    for (let i = 0; i < array.length; i++){
      let left = sum(array.slice(0, i))
      let right = sum(array.slice(i + 1))
      if (left === right){
        return i
      }
    }
    return -1
  }
  
  sum = array => array.reduce((num, memo) => num + memo, 0)