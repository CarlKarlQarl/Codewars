XO = str => {
    let xs = 0
    let os = 0
    str.split("").forEach(char => {
      if(char.toLowerCase() === "x"){
        xs = xs + 1
      }
      if(char.toLowerCase() === "o"){
        os = os + 1
      }
    })
    return xs === os ? true : false
}