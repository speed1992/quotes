import { getPhilosopherData } from '../../../../../common/static/utils/utils'
import { getDifferenceFromCurrentDate } from '../../../../../common/utils/dateUtils'
import { getUserDetails, sendUserDetails } from '../../mobile/mobile-menu/utils/utils'

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
    getUserMarkedQuotesCount({ userName })
    let { markedQuotesFromServer, dateFromServer } = await getUserDetails({ userName, markedQuotes, openSnackbar, setMarkedQuotes })
    if (markedQuotesFromServer) {
        const markedQuotesFromServerCount = Object.values(markedQuotesFromServer).flat().length
        if (markedQuotesFromServerCount > markedQuoteClientCount) {
            setMarkedQuotes(markedQuotesFromServer)
            openSnackbar('Auto-Sync : Restored all marked quotes!', 4000)
        } else if (markedQuoteClientCount > markedQuotesFromServerCount) {
            if (getDifferenceFromCurrentDate(new Date(dateFromServer)) < 0) {
                await sendUserDetails({ userName, markedQuotes, openSnackbar })
                openSnackbar('Synced marked quotes with server!', 4000)
            }
        }
        setSyncDate(Date.now())
    }
}
