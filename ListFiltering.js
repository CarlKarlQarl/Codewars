filter_list = list => {
    return list.filter(number => {
      return Number.isInteger(number)
    })
}