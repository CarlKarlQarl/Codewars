function ipsBetween(start, end){
    start = start.split(".")
    end = end.split(".")  
    return end
        .map((num, index) => num - start[index])
        .map((num, index) => num * Math.pow(256, 3 - index))
        .reduce((sum, num) => sum + num)
}