import { getPhilosopherData } from '../../../../../common/static/utils/utils'

export const setThemeClassNameOnHTMLTag = (value) => {
    var root = document.getElementsByTagName('html')[0]
    root.className = ''
    if (value) {
        root.classList.add('darkTheme')
    } else {
        root.classList.add('lightTheme')
    }
}

export const bringIntoOriginalOrder = (originalOptions, newOptions) => originalOptions.map((item) => getPhilosopherData({ philosopher: item.value, options: newOptions })).reverse()

export const bringIntoAlphabeticalOrder = (options) => [...options].sort((a, b) => a.fullName.localeCompare(b.fullName))
