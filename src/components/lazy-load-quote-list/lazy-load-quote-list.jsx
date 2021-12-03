import React, { useEffect, useState } from "react";
import { lazyLoadAsset } from "../../static/utils/utils";
import { getCurrentPhilosopherFromLocalStorage } from "../../utils/localStorageUtils";
import { currentPhilosopher, initializeData } from "../../utils/staticDataUtils";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";
import data from "../../static/philosophers-data";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);

    useEffect(async () => {
        getCurrentPhilosopherFromLocalStorage();
        await lazyLoadAsset(currentPhilosopher)
        console.log("inside lazyLoadAsset then")
        initializeData()
        setIsFetching(false)
    }, []);

    return (isFetching ? (<><Loader />{currentPhilosopher} </>) : <QuotesList {...props} />)
}


