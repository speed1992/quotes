export function refreshPageWithNewKey(queryString) {
    var newUrl = window.location.origin + window.location.pathname + "?key=" + queryString;
    window.location.href = newUrl;
    return false;
}