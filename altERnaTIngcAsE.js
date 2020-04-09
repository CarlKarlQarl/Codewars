String.prototype.toAlternatingCase = function () {
    return this.split("").map(char => 
      char.charCodeAt(0) > 91
        ? char.toUpperCase() 
        : char.toLowerCase()
    ).join("")
}