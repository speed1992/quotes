import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getPhilosopherQuotes } from '../../../../common/static/utils/utils'
import { isUndefined } from '../../../../common/utils/commonUtils'

function UnreadCounter({ isFetching, isFetchingOptions, markedQuotes, currentPhilosopher }) {
    const [quoteCounts, setQuoteCounts] = useState({ totalQuoteCount: null, readCount: null, unreadCount: null })
    const options = useSelector((state) => state.philosophersData.options)
    const originalData = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })

    useEffect(() => {
        if (!isFetching && !isFetchingOptions && originalData) {
            const totalQuoteCount = originalData.length
            const readCount = isUndefined(markedQuotes[currentPhilosopher]) ? 0 : markedQuotes[currentPhilosopher].length
            const unreadCount = totalQuoteCount - readCount

            setQuoteCounts({ totalQuoteCount, readCount, unreadCount })
        }
    }, [currentPhilosopher, isFetching, isFetchingOptions, markedQuotes, originalData])

    const { totalQuoteCount, readCount, unreadCount } = quoteCounts

    if (!originalData || isFetching || isFetchingOptions) {
        return null // Render nothing while fetching data
    }

    return (
        <span>
            {totalQuoteCount !== null && `Total: ${totalQuoteCount}`}
            {readCount !== null && ` Read: ${readCount}`}
            {unreadCount !== null && ` Unread: ${unreadCount}`}
        </span>
    )
}

export default UnreadCounter
