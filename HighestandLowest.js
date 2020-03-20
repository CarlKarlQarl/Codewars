highAndLow = numbers => {
    let max = getMax(numbers)
    let min = getMin(numbers)
    return `${max} ${min}`
  }
  
  getMax = numbers => {
    return numbers
      .split(" ")
      .reduce((memo, number) => {
        return parseInt(number) > parseInt(memo)
          ? number
          : memo
      })
  }
  
  getMin = numbers => {
    return numbers
      .split(" ")
      .reduce((memo, number) => {
        return parseInt(number) < parseInt(memo)
          ? number
          : memo
      })
  }