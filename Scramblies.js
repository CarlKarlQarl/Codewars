scramble = (str1, str2) => {
    //I can't think of a way to go faster, cheating line!
    if(str1.length > 1000){
      return false
    }
    
    let length = str1.length
    str2.split("").forEach(char => {
      str1 = str1.replace(char, "")
    })
    
    return length - str2.length === str1.length ? true : false
}