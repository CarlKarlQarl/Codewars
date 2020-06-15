function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let strArray = str.split("").map((char, index) => {
        if (str.charCodeAt(index) < "a".charCodeAt(0)) {
          return str.charCodeAt(index)
        } else {
          return str.charCodeAt(index) + abc.indexOf(key[index])
        }
      })
      strArray = strArray.map(char => {
        return char > "z".charCodeAt(0) 
          ? char - 26 
          : char
      })
      return strArray.map(char => String.fromCharCode(char)).join("")
    };
    this.decode = function (str) {
      let strArray = str.split("").map((char, index) => {
        if (str.charCodeAt(index) < "a".charCodeAt(0)) {
          return str.charCodeAt(index)
        } else {
          return str.charCodeAt(index) - abc.indexOf(key[index])
        }
      })
      strArray = strArray.map(char => {
        return char < "a".charCodeAt(0)
          ? char + 26 
          : char
      })
      return strArray.map(char => String.fromCharCode(char)).join("")
    };
  }