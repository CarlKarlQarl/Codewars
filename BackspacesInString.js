function cleanString(s) {
    let cleanArray = []
    s.split("").forEach(char => char !== "#" ? cleanArray.push(char) : cleanArray.pop())
    return cleanArray.join("")
};