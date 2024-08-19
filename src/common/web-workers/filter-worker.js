onmessage = function ({ data }) {
    const { filterName } = data
    if (filterName === 'searchTermFilter') {
        const { currentData, searchText, searchFilters } = data
        const lowerSearchText = searchText.toLowerCase()
        const exclusions = searchFilters?.exclusions !== '' ? searchFilters?.exclusions.split('\n') : searchFilters?.exclusions
        const inclusions = searchFilters?.inclusions !== '' ? searchFilters?.inclusions.split('\n') : searchFilters?.inclusions

        const filteredQuotes = currentData.filter(({ quote }) => {
            const lowerQuote = quote.toLowerCase()
            if (inclusions === '' && exclusions === '') {
                return lowerQuote.includes(lowerSearchText)
            } else if (inclusions === '' && exclusions !== '') {
                return lowerQuote.includes(lowerSearchText) && !exclusions.some((word) => lowerQuote.includes(word))
            } else if (inclusions !== '' && exclusions === '') {
                return lowerQuote.includes(lowerSearchText) && inclusions.some((word) => lowerQuote.includes(word))
            } else if (inclusions !== '' && exclusions !== '') {
                return lowerQuote.includes(lowerSearchText) && !exclusions.some((word) => lowerQuote.includes(word)) && inclusions.some((word) => lowerQuote.includes(word))
            }
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
