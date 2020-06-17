function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let strArray = str.split("").map((char, index) => {
        if (isLowerCase(char)) {
          if (str.charCodeAt(index % key.length) + abc.indexOf(key[index % key.length]) > "z".charCodeAt(0)){
            return str.charCodeAt(index % key.length) + abc.indexOf(key[index % key.length]) - 26
          } else {
            return str.charCodeAt(index % key.length) + abc.indexOf(key[index % key.length])
          }
        } else {
          return str.charCodeAt(index % key.length)
        }
      })
      return strArray.map(char => String.fromCharCode(char)).join("")
    };
    
    this.decode = function (str) {
      let strArray = str.split("").map((char, index) => {
        if (isLowerCase(char)) {
          if (str.charCodeAt(index % key.length) - abc.indexOf(key[index % key.length]) < "a".charCodeAt(0)){
            return str.charCodeAt(index % key.length) - abc.indexOf(key[index % key.length]) + 26
          } else {
            return str.charCodeAt(index % key.length) - abc.indexOf(key[index % key.length])
          }
        } else {
          return str.charCodeAt(index % key.length)
        }
      })
      return strArray.map(char => String.fromCharCode(char)).join("")
    };
  }
  
  function isLowerCase(char) {
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? true : false
  }