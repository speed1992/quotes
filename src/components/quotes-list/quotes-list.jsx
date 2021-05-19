import React, { useCallback, useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Row } from "../row/row";

import { currentData, resetData } from "../../utils/staticDataUtils";
import { OPTIONS } from "../../constants/constants";

import { scrollToMemorizedRow, resetSearch, scrollToFirstRow, search } from "../../utils/utils";
import "./quotes-list.css"
import Select from "../select/select";
import { changeQuotesData } from "./utils/utils";

function QuotesList({ width, height }) {
    const listRef = useRef()
    const [searchText, setSearchText] = useState('');
    const [triggerChange, setTriggerChange] = useState(0);

    const performSearch = useCallback(() => search(searchText, (triggerChange) => setTriggerChange(!triggerChange), () => scrollToFirstRow(listRef)), [searchText]);

    useEffect((triggerChange) => {
        resetData();
        setTriggerChange(!triggerChange);
    }, [])

    useEffect(() => {
        scrollToMemorizedRow(listRef);
    }, [listRef, triggerChange]);

    useEffect(() => {
        if (searchText === "")
            resetSearch(() => setSearchText(''), () => scrollToMemorizedRow(listRef))
        else {
            performSearch();
        }
    }, [searchText, performSearch])

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
                    <input type="text" placeholder="Search any word" value={searchText} onChange={({ target: { value } }) => setSearchText(value)}
                        onKeyDown={handleSearch}
                    />
                </div>
                <div className="column">
                    <Select options={OPTIONS} onChangeHandler={({ target: { value } }) => { console.log(value); changeQuotesData(value) }} />
                </div>
            </div>
            {
                searchText !== "" ?
                    <span>Search Results: {searchText}</span> : null
            }
            <List
                className="List"
                height={height}
                itemCount={currentData.length}
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