export function getQueryParams(qs) {
    qs = qs.split('+').join(' ')

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g
    while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2])
    }

    return params
}

export function checkQueryParams(param) {
    let query = getQueryParams(document.location.search)
    let val = query[param] ? query[param].toLowerCase() : null
    if (val === 'false' || val) return true
    else return false
}
