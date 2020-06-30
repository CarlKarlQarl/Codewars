codewarResult = (codewarrior, opponent) => {
    let battle_length = codewarrior.length
    let sortedCodewarrior = codewarrior.sort((a, b) => b - a)
    let sortedOpponent = opponent.sort((a, b) => b - a)
    let results = 0
    
    for (let i = 0; i < battle_length; i++){
      if (sortedCodewarrior[0] < sortedOpponent[0]){
        let attacker = sortedCodewarrior.pop()
        let defender = sortedOpponent.shift()
        console.log(attacker, "-", defender)
        results += determineVictor(attacker, defender)
      } else {
        let attacker = sortedCodewarrior.shift()
        let defender = sortedOpponent.shift()
        console.log(attacker, "-", defender)
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
  
  sum = array => array.reduce((num, memo) => num + memo)
  findWinningFight = (attacker, opponent) => opponent.find((num, index) => num < attacker)
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