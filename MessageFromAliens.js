decode = (m) => {
    let noiseFilter = m.split(m[0]).reverse().filter(char => char !== "")
    let translated = []
    noiseFilter.forEach(char => {
      switch(char){
        case "__":
          translated.push(" ")
          break
        case "/\\":
          translated.push("a")
          break
        case "]3":
          translated.push("b")
          break
        case "(":
          translated.push("c")
          break
        case "|)":
          translated.push("d")
          break
        case "[-":
          translated.push("e")
          break
        case "/=":
          translated.push("f")
          break
        case "(_,":
          translated.push("g")
          break
        case "|-|":
          translated.push("h")
          break
        case "|":
          translated.push("i")
          break
        case "_T":
          translated.push("j")
          break
        case "/<":
          translated.push("k")
          break
        case "|_":
          translated.push("l")
          break
        case "|\\/|":
          translated.push("m")
          break
        case "|\\|":
          translated.push("n")
          break
        case "()":
          translated.push("o")
          break
        case "|^":
          translated.push("p")
          break
        case "()_":
          translated.push("q")
          break
        case "/?":
          translated.push("r")
          break
        case "_\\~":
          translated.push("s")
          break
        case "~|~":
          translated.push("t")
          break
        case "|_|":
          translated.push("u")
          break
        case "\\/":
          translated.push("v")
          break
        case "\\/\\/":
          translated.push("w")
          break
        case "><":
          translated.push("x")
          break
        case "`/":
          translated.push("y")
          break
        case "~/_":
          translated.push("z")
          break
        default:
          break
      }
    })
    return translated.join("")
  }