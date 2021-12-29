import { TextField } from "@mui/material";
import React from "react";
import "./wordLengthSearch.css";

export function WordLengthSearch({ start, end, setStart, setEnd, setSearchText, isMobile }) {
    const renderComponent = () => {
        if (isMobile) {
            return (
                <> <input className="smallInput" name="start" type="number" min="1" value={start} onChange={({ target: { value } }) => setStart(value)} />{` to `} <input className="smallInput" name="end" type="number" min="0" value={end} onChange={({ target: { value } }) => setEnd(value)} />
                </>

            )
        }
        else {
            return (
                <>
                    <TextField className="smallInput" id="outlined-number" label="Start" type="number" size="small" name="start" min="1" value={start} onChange={({ target: { value } }) => setStart(value)} />
                    <span className="to">{` to `}</span>
                    <TextField className="smallInput" id="outlined-number" label="End" type="number" size="small" name="end" min="0" value={end} onChange={({ target: { value } }) => setEnd(value)} />
                </>
            )
        }
    }
    return (
        renderComponent()
    )
}