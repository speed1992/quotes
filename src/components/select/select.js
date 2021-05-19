import React from "react";

function Select({ options, onChangeHandler }) {
    return (
        <>
            <select onChange={onChangeHandler}>
                {options && options.map(({ id, name: value }) => <option key={id} value={value}>{value}</option>)}
            </select>
        </>)
}

export default Select