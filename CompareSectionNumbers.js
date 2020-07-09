cmp = (section1, section2) => {
    let sect1 = removeTrailingZeroes(section1.split(".").map(num => parseInt(num) + 0))
    let sect2 = removeTrailingZeroes(section2.split(".").map(num => parseInt(num) + 0))
    let length = sect1.length > sect2.length ? sect1.length : sect2.length
    
    for (let i = 0; i < length; i++){
        if (!sect1[i] && sect1[i] !== 0){
            return -1
        } else if (!sect2[i] && sect2[i] !== 0){
            return 1
        } else if (sect1[i] > sect2[i]){
            return 1
        } else if (sect1[i] < sect2[i]){
            return -1
        }
    }
    return 0
}
  
removeTrailingZeroes = array => {
    if (array[array.length - 1] === 0){
        array.pop()
        return removeTrailingZeroes(array)
    } else {
        return array
    }
}