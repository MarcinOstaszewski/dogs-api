const capitalise = text => {
    let result = text.split(' ').map( el => el.slice(0,1).toUpperCase() + el.slice(1));
    return result.join(' ')
}

export { capitalise };