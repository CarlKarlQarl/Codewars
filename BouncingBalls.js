bouncingBall = (h, bounce, window) => {
    if(h <= window || bounce < 0 || bounce >= 1){
      return -1
    }
    let seeBall = 0
    let newHeight = h
    while (newHeight * bounce > window){
      newHeight = newHeight * bounce
      seeBall = seeBall + 1
    }
    return seeBall * 2 + 1
}