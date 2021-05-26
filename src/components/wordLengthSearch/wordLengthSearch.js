import React, { useEffect, useState } from "react";
import { scrollToFirstRow } from "../../utils/utils";
import { changeQuotesByWordLength } from "../quotes-list/utils/utils";
import "./wordLengthSearch.css";

export function WordLengthSearch({ listRef, setTriggerChange, triggerChange }) {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState("");

    useEffect(() => {

        changeQuotesByWordLength(start, end)
        setTriggerChange(!triggerChange);
        scrollToFirstRow(listRef)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end])

    return (
        <>
            <input
                className="smallInput"
                name="start"
                type="number"
                value={start}
                onChange={({ target: { value } }) => setStart(value)} />
            <input
                className="smallInput"
                name="end"
                type="number"
                value={end}
                onChange={({ target: { value } }) => setEnd(value)} />
        </>
    )
}