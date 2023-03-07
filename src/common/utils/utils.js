import { currentData, currentPhilosopher } from './staticDataUtils'

export const scrollToFirstRow = (listRef) => {
    if (currentData.length > 0 && listRef.current) {
        listRef.current.scrollToRow(0)
    }
}

export const scrollToMemorizedRow = (listRef) => {
    if (currentData.length > 0 && listRef.current) {
        let scrollPosition = JSON.parse(localStorage.getItem(currentPhilosopher + '-scrollPosition'))

        if (typeof scrollPosition !== undefined && scrollPosition !== 'undefined' && scrollPosition && scrollPosition > 0) {
            listRef.current.scrollToRow(scrollPosition)
        } else {
            scrollToFirstRow(listRef)
        }
    }
}

export const search = ({ searchText, currentData, setCurrentData }) => {
    if (currentData !== undefined) {
        const filteredQuotes = currentData.filter(({ quote }) => {
            if (quote.toLowerCase().indexOf(searchText.toLowerCase()) < 0) {
                return false
            } else {
                return true
            }
        })
        return filteredQuotes
    }
}

export const isMobile = () => window.innerWidth <= 600
