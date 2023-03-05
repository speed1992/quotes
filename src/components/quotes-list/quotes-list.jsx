import React, { useEffect } from 'react'
import List from 'react-virtualized/dist/commonjs/List'
import { Row } from '../row/row'
import './quotes-list.css'
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from './utils/utils'

function NoRowsRenderer() {
    return <>No Search Results!</>
}

function QuotesList({ listRef, width, height, searchText, start, end, translateKey, markedMode, currentData, setCurrentData, options, currentPhilosopher, markedQuotes, setMarkedQuotes }) {
    const philosopherFullName = getPhilosopherFullName({ currentPhilosopher, options })
    const philosopherFullName_i10n = getPhilosopherFullName_i10n({ currentPhilosopher, options })
    useEffect(() => {
        // scrollToMemorizedRow(listRef)
    }, [listRef])

    function rowRenderer({ index, ...others }) {
        return <Row data={{ searchText, start, end, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode, currentData, setCurrentData, currentQuote: currentData[index], currentPhilosopher, markedQuotes, setMarkedQuotes }} {...others} />
    }

    return <List className="List" height={height} rowCount={currentData.length} rowHeight={600} width={width} ref={listRef} rowRenderer={rowRenderer} noRowsRenderer={NoRowsRenderer} />
}

export default QuotesList
