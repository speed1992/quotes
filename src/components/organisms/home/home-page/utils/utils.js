import { getPhilosopherData, getPhilosopherQuotes } from '../../../../../common/static/utils/utils'
import { getUserDetails, getUserMarkedQuotesCount, sendUserDetails } from '../../mobile/mobile-menu/utils/utils'
import { getWordCount } from '../../quotes-list/utils/utils'

export const setThemeClassNameOnHTMLTag = (value) => {
    let root = document.getElementsByTagName('html')[0]
    root.className = ''
    if (value) {
        root.classList.add('darkTheme')
    } else {
        root.classList.add('lightTheme')
    }
}

export const bringIntoOriginalOrder = (originalOptions, newOptions) => originalOptions.map((item) => getPhilosopherData({ philosopher: item.value, options: newOptions })).reverse()

export const bringIntoAlphabeticalOrder = (options) => [...options].sort((a, b) => a.fullName.localeCompare(b.fullName))

export async function compareWithServerSyncDatesAndMakeAnAPICall(userName, markedQuotes, openSnackbar, setMarkedQuotes, setRestoreQuotesFromServerCachedDate, markedQuoteClientCount) {
    const markedQuotesFromServerCount = await getUserMarkedQuotesCount({ userName })
    if (markedQuotesFromServerCount) {
        if (markedQuotesFromServerCount > markedQuoteClientCount) {
            let { markedQuotesFromServer } = await getUserDetails({ userName, openSnackbar })
            setMarkedQuotes(markedQuotesFromServer)
            openSnackbar('Auto-Sync : Restored all marked quotes!', 4000)
        } else if (markedQuoteClientCount > markedQuotesFromServerCount) {
            await sendUserDetails({ userName, markedQuotes, openSnackbar })
            // openSnackbar('Auto-Sync : Synced marked quotes with server database!', 4000)
        }
        setRestoreQuotesFromServerCachedDate(Date.now())
    }
}

export const autoPopulateWordCount = ({ currentPhilosopher, options, markedQuotes, setStart, setEnd }) => {
    const quotes = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
    const markedQuotesOfTheCurrentPhilosopher = markedQuotes?.[currentPhilosopher] || []
    const newQuotes = quotes.filter((quote) => !markedQuotesOfTheCurrentPhilosopher.includes(quote.id))
    const minimumWordCount = newQuotes.reduce((minCount, { quote }) => {
        if (quote !== '') return Math.min(getWordCount(quote), minCount)
        else return minCount
    }, Infinity)
    if (minimumWordCount !== Infinity) {
        setStart(1)
        setEnd(minimumWordCount)
    }
}
