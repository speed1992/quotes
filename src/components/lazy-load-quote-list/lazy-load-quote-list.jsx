import React, { useState } from "react";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true);
    // return (isFetching ? <Loader /> : <QuotesList {...props} />)
    return (<Loader />)
}