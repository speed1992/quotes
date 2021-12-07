/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { useDidMountEffect } from "../../utils/custom-hooks-utils";
import { getCurrentPhilosopherFromLocalStorage } from "../../utils/localStorageUtils";
import { currentData, currentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToFirstRow, scrollToMemorizedRow, search } from "../../utils/utils";
import { changeQuotesByWordLength } from "../quotes-list/utils/utils"
import { Header } from "../header/header";
import { LazyLoadQuoteList } from "../lazy-load-quote-list/lazy-load-quote-list";
import "./home-page.css";
import { Loader } from "../loader/loader";

export const HomePage = () => {
    const listRef = useRef()
    const [searchText, setSearchText] = useState('');
    const [triggerChange, setTriggerChange] = useState(0);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState("");
    const [isFetching, setIsFetching] = useState(false);

    const performSearch = useCallback(() => {
        search(searchText)
        scrollToFirstRow(listRef)
    }, [searchText, listRef])

    useEffect(() => {
        getCurrentPhilosopherFromLocalStorage();
        setTriggerChange(!triggerChange)
    }, [])

    useEffect(() => {
        scrollToMemorizedRow(listRef)
    }, [listRef.current])

    useEffect(() => {
        setTriggerChange(!triggerChange)
    }, [currentData, searchText, currentPhilosopher, start, end])

    useDidMountEffect(() => {
        changeQuotesByWordLength(start, end)
        scrollToFirstRow(listRef)
    }, [start, end])

    useDidMountEffect(() => {
        scrollToFirstRow(listRef)
        performSearch()
    }, [searchText, performSearch])

    const propsToSend = { setSearchText, searchText, setTriggerChange, triggerChange, listRef, start, setStart, end, setEnd, setIsFetching, isFetching }

    return (
        <>
            {isFetching ? <Loader /> : (<>
                <Header {...propsToSend} />
                <div className="content">
                    < AutoSizer >
                        {({ height, width }) => (
                            <LazyLoadQuoteList {...propsToSend} width={width} height={height} />
                        )}
                    </AutoSizer>
                </div>
            </>)
            }
        </>
    )
};