import React, { useEffect, useState } from 'react';
import { getReadArrayFromLocalStorage } from '../../common/utils/localStorageUtils';
import { getCurrentTotalQuotesCount } from '../../static/utils/utils';
import styles from "./breadcrumb.module.css";

export function Breadcrumb({ isFetching }) {

    const [quoteCounts, setQuoteCounts] = useState({ totalQuoteCount: "NA", readCount: "NA", unreadCount: "NA" });

    useEffect(() => {
        if (!isFetching) {
            const totalQuoteCount = getCurrentTotalQuotesCount();
            const readCount = getReadArrayFromLocalStorage().length;
            const unreadCount = totalQuoteCount - readCount;

            setQuoteCounts({ totalQuoteCount, readCount, unreadCount })
        }


    }, [isFetching]);

    const { totalQuoteCount, readCount, unreadCount } = quoteCounts;

    return (
        <>
            {!isFetching &&
                (<div className={styles.quotesCountRow} >
                    Read: {readCount} Unread: {unreadCount} Total: {totalQuoteCount}
                </div>)}

        </>
    )
}