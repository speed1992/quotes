onmessage = function ({ data }) {
    const { currentData, searchText, searchFilters, end, start } = data
    const lowerSearchText = searchText.toLowerCase()
    const exclusions = searchFilters?.exclusions ? searchFilters.exclusions.split('\n').map((word) => word.trim().toLowerCase()) : []
    const inclusions = searchFilters?.inclusions ? searchFilters.inclusions.split('\n').map((word) => word.trim().toLowerCase()) : []

    const filteredQuotes = currentData.filter(({ quote }) => {
        const lowerQuote = quote.toLowerCase()

        // Check search text inclusion
        if (!lowerQuote.includes(lowerSearchText)) return false

        // Check exclusions
        if (exclusions.length > 0 && exclusions.some((word) => lowerQuote.includes(word))) return false

        // Check inclusions
        if (inclusions.length > 0 && !inclusions.some((word) => lowerQuote.includes(word))) return false

        return true
    })

    const result = filteredQuotes.filter(({ quote }) => {
        const wordCount = quote.split(/\s+/).filter(Boolean).length
        return wordCount >= start && (end === '' || wordCount <= end)
    })

    this.postMessage(JSON.stringify(result))
}
