countBits = n => {
    return Number(n)
      .toString(2)
      .split("")
      .reduce((memo, number) => memo + parseInt(number), 0)
};