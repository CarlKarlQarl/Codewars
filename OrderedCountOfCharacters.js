orderedCount = text => {
    let array = text.split("")
    let uniqueArray = [...new Set(array)]

    return uniqueArray.map(key => {
        let count = array.reduce((memo, value) => {
        return key === value ? memo + 1 : memo
        }, 0)
        
        return [key, count]
    })
}