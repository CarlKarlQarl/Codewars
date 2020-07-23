solve = s => {
    let upper = 0
    let lower = 0
    let num = 0
    let special = 0
    
    s.split("").forEach(char => {
        let charCode = char.charCodeAt(0)
        if(charCode >= 65 && charCode <= 90){
            upper++
        } else if(charCode >= 97 && charCode <= 122){
            lower++
        } else if(charCode >= 48 && charCode <= 57){
            num++
        } else {
            special++
        }
    })
    return [upper, lower, num, special]
}