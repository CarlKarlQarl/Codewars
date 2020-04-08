generateHashtag = string => {
    let capitalized = string.split(" ").filter(word => {
      return word !== ""
    }).map(word => {
      return word[0].toUpperCase() + word.slice(1)
    }).join("")
    
    return capitalized.length > 0 && capitalized.length < 140
      ? `#${capitalized}`
      : false
}