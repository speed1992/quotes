import React, { useEffect, useState } from "react";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../static/utils/utils";
import { currentPhilosopher } from "../../utils/staticDataUtils";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";
import { changeQuotesData } from "../quotes-list/utils/utils";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);

    async function lazyInit() {
        try {
            if (currentPhilosopher.trim().toLowerCase() === "all")
                await lazyLoadAllAssets()
            else
                await lazyLoadAsset(currentPhilosopher)

            changeQuotesData(currentPhilosopher)
            setIsFetching(false)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        lazyInit()
    }, []);

    return (isFetching ? <Loader /> : <QuotesList {...props} />)
}

