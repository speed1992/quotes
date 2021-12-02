import React, { useCallback, useEffect, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { currentData, currentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToFirstRow, scrollToMemorizedRow, search } from "../../utils/utils";
import { Header } from "../header/header";
import { LazyLoadQuoteList } from "../lazy-load-quote-list/lazy-load-quote-list";
import "./home-page.css";
import { init } from "./utils/utils";

export const HomePage = () => {
    const listRef = useRef()
    const [searchText, setSearchText] = useState('');
    const [triggerChange, setTriggerChange] = useState(0);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState("");

    const performSearch = useCallback(() => {
        search(searchText)
        scrollToFirstRow(listRef)
    }, [searchText, listRef])

    useEffect(() => {
        init();
        setTriggerChange(!triggerChange)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        scrollToMemorizedRow(listRef)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listRef.current])

    useEffect(() => {
        setTriggerChange(!triggerChange)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentData, searchText, currentPhilosopher, start, end])

    useEffect(() => {
        scrollToFirstRow(listRef)
    }, [start, end])

    useEffect(() => {
        scrollToFirstRow(listRef)
        performSearch()
    }, [searchText, performSearch])

    const propsToSend = { setSearchText, searchText, setTriggerChange, triggerChange, listRef, start, setStart, end, setEnd }

    return (
        <>
            <Header {...propsToSend} />
            <div className="content">
                < AutoSizer >
                    {({ height, width }) => (
                        <LazyLoadQuoteList {...propsToSend} width={width} height={height} />
                    )}
                </AutoSizer>
            </div>
        </>
    )
};