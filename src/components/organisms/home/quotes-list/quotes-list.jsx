import React, { useEffect } from 'react'
import List from 'react-virtualized/dist/commonjs/List'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isDesktop, scrollToQuoteId } from '../../../../common/utils/utils'
import Row from '../row/row'
import { NoRowsRenderer } from './utils/listUtils'
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from './utils/utils'
const ToggleMinMode = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "ToggleMinMode" */ '../mobile/toggle-min-mode/toggleMinMode')))

function QuotesList({ listRef, width, height, searchText, start, end, markedMode, currentData, setCurrentData, options, currentPhilosopher, markedQuotes, setMarkedQuotes, scrollPosition, setScrollPosition, darkMode, scheduledPosts, setScheduledQuotes, rowsRendered, setRowsRendered, voiceSpeed, minMode }) {
    const philosopherFullName = getPhilosopherFullName({ currentPhilosopher, options })
    const philosopherFullName_i10n = getPhilosopherFullName_i10n({ currentPhilosopher, options })

    useEffect(() => {
        if (rowsRendered) {
            scrollToQuoteId(listRef, scrollPosition, currentData, currentPhilosopher)
        }
    }, [rowsRendered, currentPhilosopher])

    useEffect(() => {
        if (listRef.current) {
            scrollToQuoteId(listRef, scrollPosition, currentData, currentPhilosopher)
        }
    }, [listRef?.current])

    function rowRenderer({ index, ...others }) {
        return <Row data={{ searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentData, setCurrentData, currentQuote: currentData[index], index, currentPhilosopher, markedQuotes, setMarkedQuotes, scrollPosition, setScrollPosition, darkMode, listRef, scheduledPosts, setScheduledQuotes, rowsRendered, setRowsRendered, voiceSpeed, minMode }} {...others} />
    }

    return (
        currentPhilosopher !== undefined &&
        currentData !== undefined && (
            <>
                <ToggleMinMode />
                <List height={screen.height - screen.height / 4} rowCount={currentData?.length} rowHeight={550} width={width} ref={listRef} rowRenderer={rowRenderer} noRowsRenderer={currentPhilosopher !== undefined && currentData !== undefined ? NoRowsRenderer : null} style={{ padding: '1rem', textAlign: isDesktop() && 'center' }} />
            </>
        )
    )
}

export default QuotesList
