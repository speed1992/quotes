import { getPhilosopherData } from '../../../../../common/static/utils/utils'

export const setDarkModeClassOnHTMLTag = (value, className = 'darkTheme') => {
    var root = document.getElementsByTagName('html')[0]
    if (value) {
        root.classList.add(className)
    } else {
        root.classList.remove(className)
    }
}

export const bringIntoOriginalOrder = (originalOptions, newOptions) => originalOptions.map((item) => getPhilosopherData({ philosopher: item.value, options: newOptions })).reverse()

export const bringIntoAlphabeticalOrder = (options) => [...options].sort((a, b) => a.fullName.localeCompare(b.fullName))
