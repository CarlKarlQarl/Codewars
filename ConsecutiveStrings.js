longestConsec = (strarr, k) => {
    let length = strarr.length
    if (length === 0 || k > length || k <= 0) return ""
    
    let stringGroups = []
    for (let index = 0; index < length - k + 1; index++){
        stringGroups.push(strarr.slice(index, index + k))
    }
    
    let flattenGroups = stringGroups.map(
        group => group.length === 1 ? group[0] : group.join("")
    )
    
    let longestString = flattenGroups.reduce(
        (str, memo) => str.length >= memo.length ? str : memo, ""
    )
    
    return longestString
}