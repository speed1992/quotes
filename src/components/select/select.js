import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SelectMUI from '@mui/material/Select';
import React from "react";
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
                    <FormControl size="small" sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-helper-label">Philosopher</InputLabel>
                        <SelectMUI
                            label="Philosopher"
                            onChange={onChangeHandler}
                            value={currentPhilosopher}
                        >
                            {options && options.map(({ id, displayName, value }) =>
                                <MenuItem key={id} value={value}>{displayName}</MenuItem>)}
                        </SelectMUI>
                    </FormControl >)
            )

        }
    }

    return (renderSelect())
}

export default Select