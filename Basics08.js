nextHigher = n => {
    let i = 1
    while (binarySum(n) != binarySum(n + i)){
      i = i + 1
    }
    return n + i
  }
  
  binarySum = n => {
    return n.toString(2).split("").reduce((memo, num) => parseInt(memo) + parseInt(num))
}