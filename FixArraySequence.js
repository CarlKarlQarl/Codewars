function solve(arr){
    let length = arr.length
    let num = 0
    let fixed = []
    for(let i = 0; i < length; i++){
        num = arr.shift()
        if (num / 3 === fixed[0] || num * 2 === fixed[0]){
            fixed.unshift(num)
        } else if (fixed[fixed.length - 1] / 3 === num || fixed[fixed.length - 1] * 2 === num){
            fixed.push(num)
        } else if (fixed.length === 0){
            fixed.push(num)
        } else {
            arr.push(num)
            i--
        }
    }
    return fixed
  }