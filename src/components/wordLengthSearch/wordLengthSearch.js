import React, { useEffect } from "react";
import { cannotPressMinus, isNumber, numberGreaterThanZero, sanitize } from "../../common/validations";
import { changeQuotesByWordLength } from "../quotes-list/utils/utils";
import "./wordLengthSearch.css";

export function WordLengthSearch({ start, end, setStart, setEnd, setSearchText }) {

    useEffect(() => {
        changeQuotesByWordLength(start, end)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end])

    return (
        <>
            <input
                className="smallInput"
                name="start"
                type="number"
                min="1"
                value={start}
                onChange={(event) => {
                    const { target: { value } } = event;
                    if (sanitize([isNumber, numberGreaterThanZero, cannotPressMinus], event)) {
                        setStart(value)
                        setSearchText('')
                    }
                }} />{` to `}
            <input
                className="smallInput"
                name="end"
                type="number"
                min="0"
                value={end}
                onChange={(event) => {
                    const { target: { value } } = event;
                    if (sanitize([isNumber, numberGreaterThanZero, cannotPressMinus], event)) {
                        setEnd(value)
                        setSearchText('')
                    }
                }} />
        </>
    )
}