import React, { useEffect } from "react";
import List from 'react-virtualized/dist/commonjs/List';
import { currentData } from "../../common/utils/staticDataUtils";
import { scrollToMemorizedRow } from "../../common/utils/utils";
import { Row } from "../row/row";
import "./quotes-list.css";
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from "./utils/utils";

function NoRowsRenderer() {
    return (<>No Search Results!</>)
}

function QuotesList({ listRef, width, height, searchText, start, end, triggerChange, translateKey }) {
    const philosopherFullName = getPhilosopherFullName();
    const philosopherFullName_i10n = getPhilosopherFullName_i10n();

    useEffect(() => {
        scrollToMemorizedRow(listRef)
    }, [listRef])

    return (
        <>
            {philosopherFullName !== undefined && <List
                className="List"
                height={height}
                rowCount={currentData.length}
                rowHeight={600}
                width={width}
                ref={listRef}
                rowRenderer={props => <Row data={{ searchText, start, end, triggerChange, philosopherFullName, philosopherFullName_i10n, translateKey }} {...props} />}
                noRowsRenderer={NoRowsRenderer}
            />}
        </>
    )
}

export default QuotesList;