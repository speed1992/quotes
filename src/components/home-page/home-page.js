/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { useDidMountEffect } from "../../common/utils/custom-hooks-utils";
import { useLocalStorage } from "../../common/utils/localStorageUtils";
import { combinedSearch } from "../../common/utils/searchUtils";
import { scrollToFirstRow } from "../../common/utils/utils";
import { setCurrentDataRedux, setCurrentPhilosopherRedux, setEndRedux, setMarkedModeRedux, setOriginalDataRedux, setSearchTextRedux, setStartRedux } from "../../components/home-page/homePageReduxSlice/homePageReduxSlice";
import { Layout } from "../layout/layout";
import { LazyLoadQuoteList } from "../lazy-load-quote-list/lazy-load-quote-list";
import { Loader } from "../loader/loader";
import "./home-page.css";


export const HomePage = () => {
    const listRef = useRef()
    const [triggerChange, setTriggerChange] = useState(0);
    const start = useSelector(state => state.philosophersData.start);
    const end = useSelector(state => state.philosophersData.end);
    const searchText = useSelector(state => state.philosophersData.searchText);
    const currentPhilosopher = useSelector(state => state.philosophersData.currentPhilosopher);
    const currentData = useSelector(state => state.philosophersData.currentData);
    const markedMode = useSelector(state => state.philosophersData.markedMode);
    const [isFetching, setIsFetching] = useState(false);
    const [translateKey, setTranslateKey] = useLocalStorage("TRANSLATE", false);
    //Redux-Work
    const dispatch = useDispatch();

    const setStart = (value) => dispatch(setStartRedux(value));
    const setEnd = (value) => dispatch(setEndRedux(value));
    const setSearchText = (value) => dispatch(setSearchTextRedux(value));
    const setMarkedMode = (value) => dispatch(setMarkedModeRedux(value));
    const setCurrentPhilosopher = (name) => dispatch(setCurrentPhilosopherRedux(name))
    const setCurrentData = (data) => dispatch(setCurrentDataRedux(data))
    const setOriginalData = (data) => dispatch(setOriginalDataRedux(data))

    useEffect(() => {
        setTriggerChange(!triggerChange)
    }, [currentData, searchText, currentPhilosopher, start, end, markedMode])

    useDidMountEffect(() => {
        combinedSearch(searchText, start, end, markedMode)
        scrollToFirstRow(listRef)
    }, [start, end, searchText, markedMode])

    const propsToSend = { setSearchText, searchText, setTriggerChange, triggerChange, listRef, start, setStart, end, setEnd, setIsFetching, isFetching, translateKey, setTranslateKey, markedMode, setMarkedMode, currentPhilosopher, setCurrentPhilosopher, setCurrentData, setOriginalData, currentData }

    const renderList = () =>
        <AutoSizer>
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