import React, { useEffect } from 'react'
import List from 'react-virtualized/dist/commonjs/List'
import { ruleEngine } from '../../common/utils/ruleEngine'
import { scrollToMemorizedRow } from '../../common/utils/utils'
import { Row } from '../row/row'
import './quotes-list.css'
import { NoRowsRenderer } from './utils/listUtils'
import { rules } from './utils/ruleEngine/rules'
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from './utils/utils'

function QuotesList({ listRef, width, height, searchText, start, end, translateKey, markedMode, currentData, setCurrentData, options, currentPhilosopher, markedQuotes, setMarkedQuotes, scrollPosition, setScrollPosition }) {
    const philosopherFullName = getPhilosopherFullName({ currentPhilosopher, options })
    const philosopherFullName_i10n = getPhilosopherFullName_i10n({ currentPhilosopher, options })

    useEffect(() => {
        scrollToMemorizedRow(listRef, scrollPosition, currentData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listRef])

    function rowRenderer({ index, ...others }) {
        return <Row data={{ searchText, start, end, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode, currentData, setCurrentData, currentQuote: currentData[index], index, currentPhilosopher, markedQuotes, setMarkedQuotes, scrollPosition, setScrollPosition, listRef }} {...others} />
    }

    return <List className="List" height={height} rowCount={currentData.length} rowHeight={ruleEngine.makeDecision(rules, { params: { start } })} width={width} ref={listRef} rowRenderer={rowRenderer} noRowsRenderer={NoRowsRenderer} style={{ padding: '1rem' }} />
}

export default QuotesList
