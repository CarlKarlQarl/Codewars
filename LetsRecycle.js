function recycle(array) {
    let recycled = [[],[],[],[]]
    let sorting = {
        paper: (type) => recycled[0].push(type),
        glass: (type) => recycled[1].push(type),
        organic: (type) => recycled[2].push(type),
        plastic: (type) => recycled[3].push(type)
    }
    array.forEach(item => {
        sorting[item.material](item.type)
        if(item.secondMaterial)sorting[item.secondMaterial](item.type)
    })
    return recycled
}