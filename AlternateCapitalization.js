capitalize = string => {
    let evenCap = []
    let oddCap = []
    string.split("").forEach((char, index) => {
        if (index % 2 === 0){
        evenCap.push(char.toUpperCase())
        oddCap.push(char.toLowerCase())
        } else {
        evenCap.push(char.toLowerCase())
        oddCap.push(char.toUpperCase())
        }
    });
    return [evenCap.join(""), oddCap.join("")]
}