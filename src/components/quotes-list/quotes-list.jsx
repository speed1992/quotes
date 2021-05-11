import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Row } from "../row/row";
import { data } from "../../static/data";
import { scrollToMemorizedRow, resetSearch, scrollToFirstRow, search } from "../utils/utils";

import "./quotes-list.css"

function QuotesList({ width, height }) {
    const listRef = useRef()
    const [searchText, setSearchText] = useState('');
    const [triggerChange, setTriggerChange] = useState(0);

    const performSearch = () => {
        search(searchText, () => setTriggerChange(!triggerChange), () => scrollToFirstRow(listRef));
    }

    useEffect(() => {
        scrollToMemorizedRow(listRef);
    }, [])

    useEffect(() => {
        if (searchText === "")
            resetSearch(() => setSearchText(''), () => scrollToMemorizedRow(listRef))
        else {
            performSearch();
        }
    }, [searchText])

    const handleSearch = (e) => {
        if (searchText !== '' && (e._reactName === "onClick" || (e._reactName === "onKeyDown" && (e.key === 'Enter')))) {
            performSearch();
        }
    }

    return (
        <>
            <div className="row">
                <div className="column">
                    <button onClick={() => { resetSearch(() => setSearchText(''), () => scrollToMemorizedRow(listRef)) }}>Home</button> 
                </div>
                <div className="column">
                </div>
                <div className="column">
                    <input type="text" value={searchText} onChange={({ target: { value } }) => setSearchText(value)}
                        onKeyDown={handleSearch}
                    />
                    <button
                        onClick={handleSearch}>Search</button>
                </div>
            </div>
            {
                searchText !== "" ?
                    <span>Search Results: {searchText}</span> : null
            }
            <List
                className="List"
                height={height}
                itemCount={data.length}
                itemSize={600}
                width={width}
                ref={listRef}
                itemData={{ searchText, triggerChange }}
            >
                {Row}
            </List>
        </>
    )
}

export default QuotesList;