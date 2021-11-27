import React from "react";
import { currentPhilosopher } from "../../utils/staticDataUtils";
import "./select.css";

function Select({ options, onChangeHandler, defaultValue }) {

    return (
        <>
            <select className="dropDown" onChange={onChangeHandler} value={currentPhilosopher}>
                {options && options.map(({ id, displayName, value }) => <option key={id} value={value}>{displayName}</option>)}
            </select>
        </>)
}

export default Select