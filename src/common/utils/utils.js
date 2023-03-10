export const scrollToFirstRow = (listRef) => {
    if (listRef.current) {
        listRef.current.scrollToRow(0)
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
