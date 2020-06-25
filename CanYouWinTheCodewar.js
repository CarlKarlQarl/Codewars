codewarResult = (codewarrior, opponent) => {
    let battle_length = codewarrior.length
    let sortedCodewarrior = codewarrior.sort((a, b) => b - a)
    let sortedOpponent = opponent.sort((a, b) => b - a)
    let results = 0
    for (let i = 0; i < battle_length; i++) {
        if(sum(sortedCodewarrior) < sum(sortedOpponent)){
            let attacker = sortedCodewarrior.pop()
            let defender = sortedOpponent.shift()
            console.log("Fight: ", attacker, defender)
            results = results + determineVictor(attacker, defender)
        } else {
            let attacker = sortedCodewarrior.shift()
            let defender = findBestFight(attacker, sortedOpponent)
            console.log("Fight: ", attacker, defender)
            let defender_index = sortedOpponent.indexOf(defender)
            results = results + determineVictor(attacker, defender)
            sortedOpponent.splice(defender_index, 1)
        }
    }
    if (results > 0){
        return "Victory"
    } else if (results < 0){
        return "Defeat"
    } else {
        return "Stalemate"
    }
}
  
sum = array => array.reduce((num, memo) => num + memo, 0)
findBestFight = (attacker, opponent) => opponent.find((num, index) => num <= attacker)
determineVictor = (attacker, defender) => {
    if (attacker > defender) {
        return 1
    } else if (attacker < defender) {
        return -1
    } else {
        return 0
    }
}