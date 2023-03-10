import PHILOSOPHERS_DATA from '../../../static/philosophers-data'

export function checkIfNull(lastReadPhilosopher) {
    let isGarbage = true

    PHILOSOPHERS_DATA.forEach(({ value }) => {
        if (value === lastReadPhilosopher) isGarbage = false
    })

    return lastReadPhilosopher === undefined || lastReadPhilosopher === 'undefined' || lastReadPhilosopher === 'null' || isGarbage
}

export const setDarkModeClassOnHTMLTag = (darkMode) => {
    var root = document.getElementsByTagName('html')[0]
    if (darkMode) {
        root.setAttribute('class', 'darkTheme')
    } else {
        root.setAttribute('class', '')
    }
}
