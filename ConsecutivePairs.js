function pairs(array){
    let chunks = []
    for (let i = 0; i < array.length; i++){
        if (array[i + 1]){
            chunks.push([array[i], array[i + 1]])
            i++
        }
    }
    let pairCount = chunks.reduce((total, array) => {
        return (
            array[0] - array[1] === Math.abs(1) ||
            array[1] - array[0] === Math.abs(1) 
                ? total + 1 
                : total
        )
    }, 0)
    return pairCount
};