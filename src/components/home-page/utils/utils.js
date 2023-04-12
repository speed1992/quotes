import PHILOSOPHERS_DATA from '../../../static/philosophers-data'
import { getPhilosopherData } from '../../../static/utils/utils'

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

export const bringIntoOriginalOrder = (originalOptions, newOptions) => originalOptions.map((item) => getPhilosopherData({ philosopher: item.value, options: newOptions })).reverse()

export const bringIntoAlphabeticalOrder = (originalOptions) => [...originalOptions].sort((a, b) => a.fullName.localeCompare(b.fullName))
