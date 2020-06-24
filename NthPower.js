modifiedSum = (array, n) => {
    let sumArray = array.reduce((num, memo) => num + memo , 0)
    let powArray = array.map(num => Math.pow(num, n))
    let sumPowArray = powArray.reduce((num, memo) => num + memo , 0)
    return sumPowArray - sumArray
}