export function sanitize(callbacks, event) {
    let validatePass = true;

    for (let i = 0; i < callbacks.length; i++) {

        if (callbacks[i](event) === false) {
            validatePass = false
            break;
        }
    }
    return validatePass
}

export function isNumber(event) {
    const { target: { value } } = event;
    return isNumber(value);
}

export function numberGreaterThanZero(evt) {
    debugger;
    evt = (evt) ? evt : window.event;
    var value = evt.target.value;
    if (parseInt(value) > -1 || value === "") {
        return true;
    }
    return false;
}

export function cannotPressMinus(evt) {
    evt = (evt) ? evt : window.event;
    var value = evt.target.value;
    debugger;
    console.log(value[0]);
    if (value[0] === "-") {
        return false;
    }
    return true;
}