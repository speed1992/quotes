import React, { useCallback, useEffect, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import OPTIONS from "../../static/philosophers-data";
import { changeData, currentData, currentPhilosopher, dataCollection, initializeData, setCurrentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToFirstRow, scrollToMemorizedRow, search } from "../../utils/utils";
import { Header } from "../header/header";
import QuotesList from "../quotes-list/quotes-list";
import "./home-page.css";

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
        let lastReadPhilosopher = localStorage.getItem('lastReadPhilosopher');

        if (lastReadPhilosopher === undefined || lastReadPhilosopher === "undefined" || lastReadPhilosopher === "null") lastReadPhilosopher = OPTIONS[0].value;

        setCurrentPhilosopher(lastReadPhilosopher);

        if (lastReadPhilosopher)
            changeData(dataCollection[lastReadPhilosopher])
        else
            initializeData()

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

    const propsToSend = {
        setSearchText,
        searchText,
        setTriggerChange,
        triggerChange,
        listRef,
        start,
        setStart,
        end,
        setEnd
    }

    return (
        <>
            <div className="header">
                <Header {...propsToSend} />
            </div>
            <div className="content">
                < AutoSizer >
                    {({ height, width }) => (
                        <QuotesList {...propsToSend} width={width} height={height} />
                    )}
                </AutoSizer>
            </div>
        </>
    )
};