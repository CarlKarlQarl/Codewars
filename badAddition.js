function add(num1, num2) {
    num1 = Array.from(String(num1), Number)
    num2 = Array.from(String(num2), Number)
    let lengthDiff = num1.length - num2.length
    if(lengthDiff > 0){
        for(let i = 0; i < lengthDiff; i++){
            num2.unshift(0)
        }
    }
    if(lengthDiff < 0){
        for(let i = 0; i > lengthDiff; i--){
            num1.unshift(0)
        }
    }
    
    return parseInt(num1.reduce((memo, num, index) => {
        return memo += (num + num2[index]).toString()
    },""))
}