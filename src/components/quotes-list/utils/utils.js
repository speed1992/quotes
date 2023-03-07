import { isEmpty } from 'lodash'
import { removeReadData } from '../../../common/utils/staticDataUtils'

export const changeQuotesData = ({ currentPhilosopher, currentData, setCurrentData, options }, { markedMode = null, markedQuotes, setMarkedQuotes }) => {
    if (currentData) setCurrentData(currentData)
    if (markedMode !== undefined && markedMode) removeReadData({ currentPhilosopher, markedMode, markedQuotes, setMarkedQuotes, currentData, setCurrentData })
}

export const getPhilosopherFullName = ({ currentPhilosopher, options }) => {
    const currentIndex = options.filter(({ value }) => currentPhilosopher === value)
    if (!isEmpty(currentIndex)) return currentIndex && currentIndex[0].fullName
}

export const getPhilosopherFullName_i10n = ({ currentPhilosopher, options }) => {
    const currentIndex = options.filter(({ value }) => currentPhilosopher === value)
    if (!isEmpty(currentIndex)) return currentIndex && currentIndex[0].fullNameInOtherLanguages
}

export const searchByWordLength = (start, end, quotes, { markedMode, markedQuotes, setMarkedQuotes }, { currentData, originalData, setCurrentData, currentPhilosopher }) => {
    debugger
    if (quotes !== undefined) {
        if (typeof start === 'string' && start.trim() === '') start = 0

        const newData = quotes.filter(({ quote }) => {
            const wordCount = getWordCount(quote)

            if (end && end !== '') {
                if (wordCount >= start && wordCount <= end) {
                    return true
                }
            }
            if (end === '') {
                if (wordCount >= start) {
                    return true
                }
            }

            return false
        })
        changeQuotesData({ currentData: newData, setCurrentData, currentPhilosopher }, { markedMode, markedQuotes, setMarkedQuotes })
    }
}

export function getWordCount(str) {
    return str.split(' ').filter(function (n) {
        return n !== ''
    }).length
}
