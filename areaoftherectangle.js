area = (d,l) => {
    if (d <= l){
      return "Not a rectangle"
    } else {
      let width = Math.sqrt(Math.pow(d, 2) - Math.pow(l, 2))
      return parseFloat((width * l).toFixed(2))
    }
}