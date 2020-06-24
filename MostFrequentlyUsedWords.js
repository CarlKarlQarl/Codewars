topThreeWords = text => {
  let textArray = text
    .split(".").join(" ")
    .split(",").join(" ")
    .split("//").join(" ")
    .split(":").join(" ")
    .split(" ")
    .filter(word => word !== "" && word !== "'")
  let frequency = {}
  textArray.forEach(word => {
    let lowercase = word.toLowerCase()
    frequency[lowercase] ? frequency[lowercase] += 1 : frequency[lowercase] = 1
  })
  let arrayFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1])
  let arrayStripFrequency = arrayFrequency.map(pair => pair[0])
  let top3 = arrayStripFrequency.slice(0, 3)
  console.log(arrayFrequency)
  return top3
}