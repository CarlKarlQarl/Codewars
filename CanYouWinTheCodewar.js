codewarResult = (codewarrior, opponent) => {
    let battle_length = codewarrior.length
    let sortedCodewarrior = codewarrior.sort((a, b) => b - a)
    let sortedOpponent = opponent.sort((a, b) => b - a)
    let results = 0
    for (let i = 0; i < battle_length; i++) {
      if(sum(codewarrior) < sum(opponent)){
        let smallest = codewarrior.pop()
        let largest = opponent.shift()
        results--
      } else {
        let attacker = codewarrior.shift()
        let defender = opponent.shift()
        if (attacker > defender){
          results++
        }
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
findLargest = array => array.reduce((num, memo) => memo > num ? memo : num)
findSmallest = array => array.reduce((num, memo) => memo < num ? memo : num) 