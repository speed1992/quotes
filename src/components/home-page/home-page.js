/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { combinedSearch } from "../../common/utils/searchUtils";
import { scrollToFirstRow } from "../../common/utils/utils";
import { setCurrentDataRedux, setCurrentPhilosopherRedux, setEndRedux, setMarkedModeRedux, setOptionsRedux, setQuotesLoadedRedux, setSearchTextRedux, setStartRedux, setTranslateRedux } from "../../components/home-page/homePageReduxSlice/homePageReduxSlice";
import { Layout } from "../layout/layout";
import { LazyLoadQuoteList } from "../lazy-load-quote-list/lazy-load-quote-list";
import { Loader } from "../loader/loader";
import styles from "./home-page.module.css";

export const HomePage = () => {
    const listRef = useRef();
    const dispatch = useDispatch();
    const start = useSelector(state => state.philosophersData.start);
    const end = useSelector(state => state.philosophersData.end);
    const searchText = useSelector(state => state.philosophersData.searchText);
    const currentPhilosopher = useSelector(state => state.philosophersData.currentPhilosopher);
    const currentData = useSelector(state => state.philosophersData.currentData);
    const markedMode = useSelector(state => state.philosophersData.markedMode);
    const options = useSelector(state => state.philosophersData.options);
    const quotesLoaded = useSelector(state => state.philosophersData.quotesLoaded);
    const translateKey = useSelector(state => state.philosophersData.translate);
    const [isFetching, setIsFetching] = useState(false);

    const setStart = (value) => dispatch(setStartRedux(value))
    const setEnd = (value) => dispatch(setEndRedux(value))
    const setSearchText = (value) => dispatch(setSearchTextRedux(value))
    const setMarkedMode = (value) => dispatch(setMarkedModeRedux(value))
    const setCurrentPhilosopher = (name) => dispatch(setCurrentPhilosopherRedux(name))
    const setCurrentData = (data) => dispatch(setCurrentDataRedux(data))
    const setTranslateKey = (value) => dispatch(setTranslateRedux(value))
    const setOptions = (value) => dispatch(setOptionsRedux(value))
    const setQuotesLoaded = (value) => dispatch(setQuotesLoadedRedux(value))

    useEffect(() => {
            combinedSearch({searchText, start, end,philosopher:currentPhilosopher,setCurrentData,options}, markedMode)
            scrollToFirstRow(listRef)
    }, [start, end, searchText, markedMode,quotesLoaded])

    const propsToSend = { setSearchText, searchText, listRef, start, setStart, end, setEnd, setIsFetching, isFetching, translateKey, setTranslateKey, markedMode, setMarkedMode, currentPhilosopher, setCurrentPhilosopher, setCurrentData, currentData, options,setOptions,setQuotesLoaded }

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
                <div className={styles.content}>
                    {renderList()}
                </div>
            </>)
            }
        </>
    )
};