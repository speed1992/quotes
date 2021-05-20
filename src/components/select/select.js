import React from "react";
import { currentPhilosopher } from "../../utils/staticDataUtils";

function Select({ options, onChangeHandler, defaultValue }) {
    return (
        <>
            <select onChange={onChangeHandler} value={currentPhilosopher}>
                {options && options.map(({ id, name, value }) => <option key={id} value={value}>{name}</option>)}
            </select>
        </>)
}

export default Select