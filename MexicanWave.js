wave = string => {
    let repeatingArray = stringForEachChar(string)
    let capitalizedArray = waveCapitalization(repeatingArray)
    let removedSpacesArray = removeSpaces(capitalizedArray, string)
    
    return removedSpacesArray
  }
  
  stringForEachChar = string => {
    return string.split("").map(char => string)
  }
  
  waveCapitalization = array => {
    return array.map((string, index) => {
      return string.slice(0, index) + string[index].toUpperCase() + string.slice(index + 1)
    })
  }
  
  removeSpaces = (array, string) => {
    return array.filter(cappedString => {
      return cappedString != string
    })
}