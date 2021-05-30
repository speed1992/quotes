import React, { useEffect } from "react";
import { changeQuotesByWordLength } from "../quotes-list/utils/utils";
import "./wordLengthSearch.css";

export function WordLengthSearch({ start, end, setStart, setEnd, listRef, setTriggerChange, triggerChange }) {

    useEffect(() => {
        debugger
        changeQuotesByWordLength(start, end)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end])

    return (
        <>
            <input
                className="smallInput"
                name="start"
                type="number"
                value={start}
                onChange={({ target: { value } }) => {
                    setStart(value)
                }} />
            <input
                className="smallInput"
                name="end"
                type="number"
                value={end}
                onChange={({ target: { value } }) => {
                    setEnd(value)
                }} />
        </>
    )
}