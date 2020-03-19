function spinWords(phrase){
    return phrase
      .split(" ")
      .map(word => {
        return word.length > 4 
          ? reverseWord(word)
          : word
      })
      .join(" ")
  }
  
  function reverseWord(word){
    return word
      .split("")
      .reverse()
      .join("")
  }