function pairs(array){
    let chunks = []
    for (let i = 0; i < array.length; i++){
      if (array[i + 1]){
        chunks.push([array[i], array[i + 1]])
        i++
      }
    }
    let pairCount = chunks.reduce((total, array) => {
      return (
        Math.abs(array[0] - array[1]) === 1 ||
        Math.abs(array[1] - array[0]) === 1 
          ? total + 1 
          : total
      )
    }, 0)
    return pairCount
  };