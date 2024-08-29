onmessage = function ({ data }) {
    const { currentData, searchText, searchFilters, end, start } = data
    const lowerSearchText = searchText.toLowerCase()
    const exclusions = searchFilters?.exclusions ? searchFilters?.exclusions?.split('\n') : []
    const inclusions = searchFilters?.inclusions ? searchFilters?.inclusions?.split('\n') : []

    const filteredQuotes = currentData.filter(({ quote }) => {
        const lowerQuote = quote.toLowerCase()
        const wordCount = quote.split(/\s+/).filter(Boolean).length
        const wordCountFound = wordCount >= start && (end === '' || wordCount <= end)

        if (exclusions.length > 0 || inclusions.length > 0) {
            if (exclusions.length > 0 && exclusions.some((word) => lowerQuote.includes(word))) {
                return false
            }

            if (inclusions.length > 0 && inclusions.some((word) => lowerQuote.includes(word)) && wordCountFound) {
                return true
            }
        } else if (lowerQuote.includes(lowerSearchText) && wordCountFound) {
            return true
        }
    })

    this.postMessage(JSON.stringify(filteredQuotes))
}
