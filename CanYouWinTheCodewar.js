codewarResult = (codewarrior, opponent) => {
    let battle_length = codewarrior.length
    let sortedCodewarrior = codewarrior.sort((a, b) => a - b)
    let sortedOpponent = opponent.sort((a, b) => a - b)
    let results = 0
    
    for (let i = 0; i < battle_length; i++){
        if (sortedCodewarrior[sortedCodewarrior.length - 1] > sortedOpponent[sortedOpponent.length - 1]){
            let attacker = sortedCodewarrior.pop()
            let defender = sortedOpponent.pop()
            results += determineVictor(attacker, defender)
        } else if (sortedCodewarrior[0] <= sortedOpponent[0]){
            let attacker = sortedCodewarrior.shift()
            let defender = sortedOpponent.pop()
            results += determineVictor(attacker, defender)
        } else {
            let attacker = sortedCodewarrior.shift()
            let defender = sortedOpponent.shift()
            results += determineVictor(attacker, defender)
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
  
determineVictor = (attacker, defender) => {
    if (attacker > defender) {
        return 1
    } else if (attacker < defender) {
        return -1
    } else {
        return 0
    }
}