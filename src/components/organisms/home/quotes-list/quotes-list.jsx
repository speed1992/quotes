import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import List from 'react-virtualized/dist/commonjs/List'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isDesktop, scrollToQuoteId } from '../../../../common/utils/utils'
import Row from '../row/row'
import { NoRowsRenderer } from './utils/listUtils'
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from './utils/utils'
const ToggleMinMode = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "ToggleMinMode" */ '../mobile/toggle-min-mode/toggleMinMode')))

function QuotesList({ listRef, width, searchText, start, end, setCurrentData, options, currentPhilosopher, setMarkedQuotes, scrollPosition, setScrollPosition, darkMode, scheduledPosts, setScheduledQuotes, rowsRendered, setRowsRendered, voiceSpeed, minMode }) {
    const { currentData, markedMode, markedQuotes } = useSelector((state) => state.philosophersData)
    const philosopherFullName = useMemo(() => getPhilosopherFullName({ currentPhilosopher, options }), [currentPhilosopher, options])
    const philosopherFullName_i10n = useMemo(() => getPhilosopherFullName_i10n({ currentPhilosopher, options }), [currentPhilosopher, options])

    const style = useMemo(() => ({ padding: '1rem', textAlign: isDesktop() && 'center' }), [isDesktop])

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

    function rowRenderer({ index, key, ...others }) {
        return <Row key={currentData?.[index]?.id} data={{ searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentData, setCurrentData, currentQuote: currentData[index], index, currentPhilosopher, markedQuotes, setMarkedQuotes, scrollPosition, setScrollPosition, darkMode, listRef, scheduledPosts, setScheduledQuotes, rowsRendered, setRowsRendered, voiceSpeed, minMode }} {...others} />
    }

    return (
        currentPhilosopher !== undefined &&
        currentData !== undefined && (
            <>
                <ToggleMinMode />
                <List height={screen.height - screen.height / 4} rowCount={currentData?.length} rowHeight={550} width={width} ref={listRef} rowRenderer={rowRenderer} noRowsRenderer={currentPhilosopher !== undefined && currentData !== undefined ? NoRowsRenderer : null} style={style} />
            </>
        )
    )
}

export default QuotesList
