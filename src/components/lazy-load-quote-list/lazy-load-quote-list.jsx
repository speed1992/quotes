import React, { useEffect, useState } from "react";
import { lazyLoadAsset } from "../../static/utils/utils";
import { currentPhilosopher } from "../../utils/staticDataUtils";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";
import { changeQuotesData } from "../quotes-list/utils/utils";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);

    async function lazyInit() {
        await lazyLoadAsset(currentPhilosopher)
        changeQuotesData(currentPhilosopher)
        setIsFetching(false)
    }
    useEffect(() => {
        lazyInit()
    }, []);

    return (isFetching ? (<><Loader />{currentPhilosopher} </>) : <QuotesList {...props} />)
}

