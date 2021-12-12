export function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    // eslint-disable-next-line
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

export function sortFeatureDisabled() {
    var query = getQueryParams(document.location.search);
    let sortValue = query.sort ? query.sort.toLowerCase() : null;
    if (sortValue === "false" || sortValue)
        return true
    else return false
}

export function translateFeatureKey() {
    var query = getQueryParams(document.location.search);
    let translateValue = query.translate ? query.translate.toLowerCase() : null;
    if (translateValue === "true" || translateValue)
        return true
    else return false
}