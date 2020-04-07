rot13 = message => {
    let cipher = [...message].map(char => {
      let code = char.charCodeAt(0)
      if(code >= 97 && code <= 109){
        return String.fromCharCode(code + 13)
      }else if(code >= 110 && code <= 122){
        return String.fromCharCode(code - 13)
      }else if(code >= 65 && code <= 77){
        return String.fromCharCode(code + 13)
      }else if(code >= 78 && code <= 90){
        return String.fromCharCode(code - 13)
      }else{
        return char
      }
    }).join("")
    
    return cipher
}