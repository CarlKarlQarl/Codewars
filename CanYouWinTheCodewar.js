codewarResult = (codewarrior, opponent) => {
    let battle_length = codewarrior.length
    let sortedCodewarrior = codewarrior.sort((a, b) => b - a)
    let sortedOpponent = opponent.sort((a, b) => b - a)
    let results = 0
    
    //combine with old version, and looking at sum
    sortedCodewarrior.forEach(attacker => {
      let defender = findBestFight(attacker, sortedOpponent) || 
        findStalemate(attacker, sortedOpponent) ||
        findLargest(sortedOpponent)
      let defender_index = sortedOpponent.indexOf(defender)
      console.log("Fight :", attacker, "-", defender)
      determineVictor(attacker, defender)
      sortedOpponent.splice(defender_index, 1)
    })
    
    if (results > 0){
      return "Victory"
    } else if (results < 0){
      return "Defeat"
    } else {
      return "Stalemate"
    }
  }
  
  findBestFight = (attacker, opponent) => opponent.find((num, index) => num < attacker)
  findStalemate = (attacker, opponent) => opponent.find((num, index) => num == attacker)
  findLargest = array => array.reduce((num, memo) => memo > num ? memo : num)
  findSmallest = array => array.reduce((num, memo) => memo < num ? memo : num) 
  determineVictor = (attacker, defender) => {
    if (attacker > defender) {
      return 1
    } else if (attacker < defender) {
      return -1
    } else {
      return 0
    }
  }