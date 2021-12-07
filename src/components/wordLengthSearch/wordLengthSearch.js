import React, { useEffect } from "react";
import { changeQuotesByWordLength } from "../quotes-list/utils/utils";
import "./wordLengthSearch.css";

export function WordLengthSearch({ start, end, setStart, setEnd, setSearchText }) {
    console.log("start", start, "end", end)

    return (
        <>
            <input
                className="smallInput"
                name="start"
                type="number"
                min="1"
                value={start}
                onChange={({ target: { value } }) => {
                    setStart(value)
                    setSearchText('')
                }} />{` to `}
            <input
                className="smallInput"
                name="end"
                type="number"
                min="0"
                value={end}
                onChange={({ target: { value } }) => {
                    setEnd(value)
                    setSearchText('')
                }} />
        </>
    )
}