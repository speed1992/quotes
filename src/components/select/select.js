import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SelectMUI from '@mui/material/Select';
import React, { useEffect, useState } from "react";
import { currentPhilosopher } from "../../utils/staticDataUtils";
import { isMobile } from '../../utils/utils';
import "./select.css";

const Select = ({ options, onChangeHandler }) => {

    const [maxWidth, setMaxWidth] = useState();

    useEffect(() => {
        const width = isMobile() ? 100 : 400
        setMaxWidth(width)
    }, [])

    return (
        currentPhilosopher !== undefined && (
            <FormControl size="small" sx={{ minWidth: 100, maxWidth }}>
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

export default Select