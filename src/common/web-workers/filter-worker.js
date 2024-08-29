onmessage = function ({ data }) {
    const { currentData, searchText, searchFilters, end, start } = data
    const lowerSearchText = searchText.toLowerCase()
    const exclusions = searchFilters?.exclusions ? searchFilters?.exclusions?.split('\n') : []
    const inclusions = searchFilters?.inclusions ? searchFilters?.inclusions?.split('\n') : []

    const filteredQuotes = currentData.filter(({ quote }) => {
        const lowercasedQuote = quote.toLowerCase()
        const wordCount = quote.split(/\s+/).filter(Boolean).length
        const searchTextFound = quote.toLowerCase().includes(lowerSearchText)
        const wordCountFound = wordCount >= start && (end === '' || wordCount <= end)
        const exclusionFound = exclusions.some((word) => lowercasedQuote.includes(word))
        const inclusionFound = inclusions.some((word) => lowercasedQuote.includes(word))

        if (!exclusions.length && !inclusions.length) return searchTextFound && wordCountFound
        else if (exclusions.length && !inclusions.length) return !exclusionFound && searchTextFound && wordCountFound
        else if (!exclusions.length && inclusions.length) return inclusionFound && wordCountFound && searchTextFound
        else if (exclusions.length && inclusions.length) return inclusionFound && !exclusionFound && wordCountFound && searchTextFound
    })

    this.postMessage(JSON.stringify(filteredQuotes))
}
