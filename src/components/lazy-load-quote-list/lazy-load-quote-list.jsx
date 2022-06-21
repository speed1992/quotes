import React, { useEffect, useState } from "react";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../static/utils/utils";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";
import { changeQuotesData } from "../quotes-list/utils/utils";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);
    const { markedMode } = props;

    async function lazyInit() {
        try {
            if (currentPhilosopher !== undefined) {
                if (currentPhilosopher.trim().toLowerCase() === "all")
                    await lazyLoadAllAssets()
                else
                    await lazyLoadAsset(currentPhilosopher)

                changeQuotesData(currentPhilosopher, markedMode)
                setIsFetching(false)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        lazyInit()
    }, [currentPhilosopher]);

    return (isFetching ? <Loader /> : <QuotesList {...props} />)
}

