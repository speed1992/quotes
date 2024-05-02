onmessage = function ({ data }) {
    const { filterName } = data
    if (filterName === 'searchTermFilter') {
        const { currentData, searchText } = data
        const lowerSearchText = searchText.toLowerCase()

        const filteredQuotes = currentData.filter(({ quote }) => {
            const lowerQuote = quote.toLowerCase()
            return lowerQuote.includes(lowerSearchText)
        })

        this.postMessage(JSON.stringify(filteredQuotes))
    } else if (filterName === 'wordCountFilter') {
        const { quotes, end, start } = data

        const result = quotes.filter(({ quote }) => {
            const wordCount = quote.split(' ').filter((n) => n !== '').length

            if (end) {
                return wordCount >= start && (end === '' || wordCount <= end)
            }
            return wordCount >= start
        })

        this.postMessage(JSON.stringify(result))
    }
}
