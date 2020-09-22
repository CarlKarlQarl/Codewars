function electrons_around_the_cores(dice){
    return dice.reduce((memo, num) => {
        if(num === 3){
            memo += 2
        }
        if(num === 5){
            memo += 4
        }
        return memo
    },0)
}