import React, { useEffect } from "react";
import List from 'react-virtualized/dist/commonjs/List';
import { Row } from "../row/row";
import "./quotes-list.css";
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from "./utils/utils";

function NoRowsRenderer() {
    return (<>No Search Results!</>)
}

function QuotesList({ listRef, width, height, searchText, start, end, triggerChange, setTriggerChange, translateKey, markedMode, currentData }) {
    const philosopherFullName = getPhilosopherFullName();
    const philosopherFullName_i10n = getPhilosopherFullName_i10n();
    useEffect(() => {
        // scrollToMemorizedRow(listRef)
    }, [listRef])

    function rowRenderer({
        index, ...others
    }) {
        return (
            <Row data={{ searchText, start, end, triggerChange, setTriggerChange, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode, currentQuote: currentData[index] }} {...others} />
        );
    }

    return (
        <List
            className="List"
            height={height}
            rowCount={currentData.length}
            rowHeight={600}
            width={width}
            ref={listRef}
            rowRenderer={rowRenderer}
            noRowsRenderer={NoRowsRenderer}
        />
    )
}

export default QuotesList;