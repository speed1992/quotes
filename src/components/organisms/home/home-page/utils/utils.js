import { getPhilosopherData } from '../../../../../common/static/utils/utils'
import { getUserDetails, getUserMarkedQuotesCount, sendUserDetails } from '../../mobile/mobile-menu/utils/utils'

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

export async function compareWithServerSyncDatesAndMakeAnAPICall(userName, markedQuotes, openSnackbar, setMarkedQuotes, setSyncDate, markedQuoteClientCount) {
    const markedQuotesFromServerCount = await getUserMarkedQuotesCount({ userName })
    if (markedQuotesFromServerCount) {
        if (markedQuotesFromServerCount > markedQuoteClientCount) {
            let { markedQuotesFromServer } = await getUserDetails({ userName, openSnackbar })
            setMarkedQuotes(markedQuotesFromServer)
            openSnackbar('Auto-Sync : Restored all marked quotes!', 4000)
        } else if (markedQuoteClientCount > markedQuotesFromServerCount) {
            await sendUserDetails({ userName, markedQuotes, openSnackbar })
            openSnackbar('Synced marked quotes with server!', 4000)
        }
        setSyncDate(Date.now())
    }
}
