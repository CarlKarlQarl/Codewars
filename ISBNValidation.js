function validISBN10(isbn) {
    if (isbn.length != 10){
        return false
    }
    let sum = 0
    let num = 0
    isbn = isbn.split("")
    for (let i = 0; i < 10; i++){
        if(isNaN(isbn[i]) && i != 9){
            return false
        } else {
            num = isbn[i] == "X" ? 10 : parseInt(isbn[i])
            sum += num * (i + 1)
        }
    }
    return sum % 11 === 0 ? true : false
}