const getRandonElement = (elements) => {
    //elemento aleatorio
    const indexRandon = Math.floor(Math.random() * elements.length)
    return elements[indexRandon]
}

export {
    getRandonElement
}