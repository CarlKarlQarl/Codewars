digital_root = n => {
    let sum = n
      .toString()
      .split("")
      .reduce((memo, num) => parseInt(memo) + parseInt(num), 0)
    return sum > 9 ? digital_root(sum) : sum
}