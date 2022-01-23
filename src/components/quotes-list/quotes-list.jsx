import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { currentData } from "../../common/utils/staticDataUtils";
import { scrollToMemorizedRow } from "../../common/utils/utils";
import { Row } from "../row/row";
import "./quotes-list.css";
import { getPhilosopherFullName, getPhilosopherFullName_i10n } from "./utils/utils";

function QuotesList({ listRef, width, height, searchText, start, end, triggerChange, translateKey }) {

    const philosopherFullName = getPhilosopherFullName();
    const philosopherFullName_i10n = getPhilosopherFullName_i10n();

    useEffect(() => {
        scrollToMemorizedRow(listRef)
        // eslint-disable-next-line
    }, [listRef.current])

    return (
        <>
            {philosopherFullName !== undefined && <List
                className="List"
                height={height}
                itemCount={currentData.length}
                itemSize={600}
                width={width}
                ref={listRef}
                itemData={{ searchText, start, end, triggerChange, philosopherFullName, philosopherFullName_i10n, translateKey }}
            >
                {Row}
            </List>}
        </>
    )
}

export default QuotesList;