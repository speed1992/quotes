import React, { useState } from "react";
import { Loader } from "../loader/loader";
import QuotesList from "../quotes-list/quotes-list";

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(false);
    return (isFetching ? <Loader /> : <QuotesList {...props} />)
}

