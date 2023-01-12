import React, { useEffect, useState } from "react";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../static/utils/utils";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);
    const { currentPhilosopher, setCurrentData,options,setOptions,setQuotesLoaded } = props;

    async function lazyInit() {
        try {
            if (currentPhilosopher !== undefined) {
                if (currentPhilosopher.trim().toLowerCase() === "all")
                    await lazyLoadAllAssets()
                else {
                    await lazyLoadAsset(currentPhilosopher,{options,setOptions},setQuotesLoaded, [setCurrentData])
                }

                setIsFetching(false)
            }
            else {
                setIsFetching(false)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        lazyInit()
        // eslint-disable-next-line
    }, [currentPhilosopher]);

    return (isFetching ? <Loader /> : <QuotesList {...props} />)
}

