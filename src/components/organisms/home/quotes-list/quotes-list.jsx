import React, { useEffect } from 'react'
import List from 'react-virtualized/dist/commonjs/List'
import { ruleEngine } from '../../../../common/utils/ruleEngine'
import { isDesktop, scrollToQuoteId } from '../../../../common/utils/utils'
import Row from '../row/row'
import styles from './quote-list.module.css'
import { NoRowsRenderer } from './utils/listUtils'
import { rules } from './utils/ruleEngine/rules'
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from './utils/utils'

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

    const onRowsRendered = () => {
        if (rowsRendered === false) setRowsRendered(true)
    }

    function rowRenderer({ index, ...others }) {
        return <Row data={{ searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentData, setCurrentData, currentQuote: currentData[index], index, currentPhilosopher, markedQuotes, setMarkedQuotes, scrollPosition, setScrollPosition, darkMode, listRef, scheduledPosts, setScheduledQuotes, rowsRendered, setRowsRendered, voiceSpeed, minMode }} {...others} />
    }

    return <List className={isDesktop() && styles.textCenter} height={height} rowCount={currentData.length} rowHeight={ruleEngine.makeDecision(rules, { params: { start } })} width={width} ref={listRef} rowRenderer={rowRenderer} onRowsRendered={onRowsRendered} noRowsRenderer={currentPhilosopher !== undefined && currentData !== undefined && NoRowsRenderer} style={{ padding: '1rem' }} />
}

export default QuotesList
