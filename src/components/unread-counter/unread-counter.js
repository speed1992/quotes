import { isUndefined } from 'lodash';
import React, { useEffect, useState } from 'react';

function UnreadCounter({ isFetching, currentData, originalData, markedQuotes,currentPhilosopher }) {
    const [quoteCounts, setQuoteCounts] = useState({ totalQuoteCount: "NA", readCount: "NA", unreadCount: "NA" });

    useEffect(() => {
        if (!isFetching) {
            const totalQuoteCount = originalData.length;
            const readCount = isUndefined(markedQuotes[currentPhilosopher]) ? 0 : markedQuotes[currentPhilosopher].length;
            const unreadCount = totalQuoteCount - readCount;

            setQuoteCounts({ totalQuoteCount, readCount, unreadCount })
        }


    }, [currentPhilosopher, isFetching, markedQuotes, originalData.length]);

    const { totalQuoteCount, readCount, unreadCount } = quoteCounts;

    return (
        <>
            {!isFetching &&
                (<span>
                    Total: {totalQuoteCount} Read: {readCount} Unread: {unreadCount}
                </span>)}

        </>
    )
}

export default UnreadCounter;