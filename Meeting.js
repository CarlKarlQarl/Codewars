meeting = s => {
    let names = s.split(";")
    names = names.map(name => name.toUpperCase())
    let firstLast = names.map(name => name.split(":"))
    let sortedNames = firstLast.sort((a, b) => {
        if(a[1] > b[1]){
            return 1
        } else if(a[1] < b[1]) {
            return -1
        } else {
            if(a[0] > b[0]) {
                return 1
            } else if(a[0] < b[0]) {
                return -1
            } else {
                return 0
            }
        }
    })
    let formatted = sortedNames.reduce((memo, name) => {
        return memo.concat(`(${name[1]}, ${name[0]})`)
    }, "")
    return formatted
}