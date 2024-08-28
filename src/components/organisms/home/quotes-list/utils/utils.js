import { isObjEmpty } from '../../../../../common/utils/commonUtils'
import { removeReadData } from '../../../../../common/utils/staticDataUtils'

export const changeQuotesData = ({ currentPhilosopher, currentData, setCurrentData, options }, { markedMode = null, markedQuotes, setMarkedQuotes }) => {
    if (currentData) setCurrentData(currentData)
    if (markedMode !== undefined && markedMode) removeReadData({ currentPhilosopher, markedMode, markedQuotes, setMarkedQuotes, currentData, setCurrentData })
}

export const getPhilosopherFullName = ({ currentPhilosopher, options }) => {
    const currentIndex = options.filter(({ value }) => currentPhilosopher === value)
    if (!isObjEmpty(currentIndex)) return currentIndex && currentIndex[0].fullName
}

export const getPhilosopherFullName_i10n = ({ currentPhilosopher, options }) => {
    const currentIndex = options.filter(({ value }) => currentPhilosopher === value)
    if (!isObjEmpty(currentIndex)) return currentIndex && currentIndex[0].fullNameInOtherLanguages
}

export function getWordCount(str) {
    return str.split(' ').filter(function (n) {
        return n !== ''
    }).length
}
