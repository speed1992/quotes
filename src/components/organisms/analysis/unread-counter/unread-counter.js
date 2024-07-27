import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getPhilosopherQuotes } from '../../../../common/static/utils/utils'
import { isUndefined } from '../../../../common/utils/commonUtils'

function UnreadCounter({ isFetching, isFetchingOptions, markedQuotes, currentPhilosopher }) {
    const [quoteCounts, setQuoteCounts] = useState({ totalQuoteCount: null, readCount: null, unreadCount: null })
    const options = useSelector((state) => state.philosophersData.options)
    const originalData = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
    const { totalQuoteCount, readCount, unreadCount } = quoteCounts
    const percentageCompleted = totalQuoteCount ? `(${((readCount / totalQuoteCount) * 100).toFixed(2)}%)` : ''

    useEffect(() => {
        if (!isFetching && !isFetchingOptions && originalData) {
            const totalQuoteCount = originalData.length
            const readCount = isUndefined(markedQuotes[currentPhilosopher]) ? 0 : markedQuotes[currentPhilosopher].length
            const unreadCount = totalQuoteCount - readCount

            setQuoteCounts({ totalQuoteCount, readCount, unreadCount })
        }
    }, [currentPhilosopher, isFetching, isFetchingOptions, markedQuotes, originalData])

    if (!originalData || isFetching || isFetchingOptions) {
        return null // Render nothing while fetching data
    }

    return (
        <span>
            {totalQuoteCount !== null && `Total: ${totalQuoteCount}`}
            {readCount !== null && ` Read: ${readCount} ${percentageCompleted}`}
            {unreadCount !== null && ` Unread: ${unreadCount}`}
        </span>
    )
}

export default UnreadCounter
