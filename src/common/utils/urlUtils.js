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

export function audioFeatureKey() {
    var query = getQueryParams(document.location.search);
    let audioValue = query.audio ? query.audio.toLowerCase() : null;
    if (audioValue === "true" || audioValue)
        return true
    else return false
}

export function adminFeatureKey() {
    var query = getQueryParams(document.location.search);
    let admin = query.admin ? query.admin.toLowerCase() : null;
    if (admin === "true" || admin)
        return true
    else return false
}

export function readFeatureKey() {
    var query = getQueryParams(document.location.search);
    let read = query.read ? query.read.toLowerCase() : null;
    if (read === "true" || read)
        return true
    else return false
}

export function wipFeatureKey() {
    var query = getQueryParams(document.location.search);
    let wip = query.wip ? query.wip.toLowerCase() : null;
    if (wip === "true" || wip)
        return true
    else return false
}