reverse = array => {
    return array.map((element, index) => array[array.length - index - 1])
}