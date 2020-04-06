alphanumeric = string => {
    for(let i = 0; i < string.length; i++){
      if(
        !(string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58) && 
        !(string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) &&
        !(string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)
      ){
        return false
      }
    }
    return string ? true : false
}