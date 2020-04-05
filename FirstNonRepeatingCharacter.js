firstNonRepeatingLetter = string => {
    if(string.length == 0){
      return ""
    }
    
    let frequency = {}
    
    string.split("").forEach(char => {
      if(frequency[char.toLowerCase()]){
        frequency[char.toLowerCase()] = {count: frequency[char.toLowerCase()].count + 1}
      }else{
        frequency[char.toLowerCase()] =  {count: 1}
      }
    })
    
    let singles = string.split("").filter(char => {
      return frequency[char.toLowerCase()].count == 1
    })
    
    return singles[0] ? singles[0] : ""
}