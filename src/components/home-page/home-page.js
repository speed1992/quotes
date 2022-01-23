/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { useDidMountEffect } from "../../utils/custom-hooks-utils";
import { getCurrentPhilosopherFromLocalStorage, useLocalStorage } from "../../utils/localStorageUtils";
import { combinedSearch } from "../../utils/searchUtils";
import { currentData, currentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToFirstRow } from "../../utils/utils";
import { Layout } from "../layout/layout";
import { LazyLoadQuoteList } from "../lazy-load-quote-list/lazy-load-quote-list";
import { Loader } from "../loader/loader";
import "./home-page.css";

export const HomePage = () => {
    const listRef = useRef()
    const [searchText, setSearchText] = useState('');
    const [triggerChange, setTriggerChange] = useState(0);
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [translateKey, setTranslateKey] = useLocalStorage("TRANSLATE", true);

    useEffect(() => {
        getCurrentPhilosopherFromLocalStorage();
        setTriggerChange(!triggerChange)
    }, [])

    useEffect(() => {
        setTriggerChange(!triggerChange)
    }, [currentData, searchText, currentPhilosopher, start, end])

    useDidMountEffect(() => {
        combinedSearch(searchText, start, end)
        scrollToFirstRow(listRef)
    }, [start, end, searchText])

    const propsToSend = { setSearchText, searchText, setTriggerChange, triggerChange, listRef, start, setStart, end, setEnd, setIsFetching, isFetching, translateKey, setTranslateKey }

    const renderList = () =>
        < AutoSizer >
            {({ height, width }) => (
                <LazyLoadQuoteList {...propsToSend} width={width} height={height} />
            )}
        </AutoSizer>

    return (
        <>
            {isFetching ? <Loader /> : (<>
                <Layout {...propsToSend} />
                <div className="content">
                    {renderList()}
                </div>
            </>)
            }
        </>
    )
};