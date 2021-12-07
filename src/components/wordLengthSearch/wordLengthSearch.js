import React from "react";
import "./wordLengthSearch.css";

export function WordLengthSearch({ start, end, setStart, setEnd, setSearchText }) {
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