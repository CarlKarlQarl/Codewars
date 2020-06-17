roundToNext5 = (n) => {
    for (let i = 0; i < 5; i++){
      if((n + i) % 5 === 0){
        return n + i
      }
    }
  }