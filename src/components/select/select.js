import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { getPhilosopherObjectIndex } from "../../static/utils/utils";
import { currentPhilosopher } from "../../utils/staticDataUtils";
import "./select.css";

const Select = ({ options, onChangeHandler, isMobile }) => {
    const renderSelect = () => {
        if (isMobile) {
            return (
                <select className="dropDown" onChange={onChangeHandler} value={currentPhilosopher}>
                    {options && options.map(({ id, displayName, value }) => <option key={id} value={value}>{displayName}</option>)}
                </select>
            )
        }
        else {
            return (
                currentPhilosopher !== undefined && (
                    <Autocomplete
                        disableClearable
                        onChange={onChangeHandler}
                        getOptionLabel={(option) => option.fullName}
                        value={options[getPhilosopherObjectIndex(currentPhilosopher)]}
                        options={options}
                        size="small"
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Philosopher" />}
                    />
                )
            )

        }
    }

    return (renderSelect())
}

export default Select