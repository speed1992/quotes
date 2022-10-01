import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { getCurrentPhilosopherFullname, getPhilosopherObjectIndex } from "../../static/utils/utils";
import MobileSelect from "../mobile-select/mobile-select";
import "./select.css";

const Select = ({ options, currentPhilosopher, onChangeHandler, isMobile }) => {

    const renderSelect = () => {
        if (isMobile) {
            return (
                <MobileSelect
                    onChangeHandler={onChangeHandler}
                    value={getCurrentPhilosopherFullname()}
                    placeholder={"Search philosopher"}
                    options={options} />
            )
        }
        else {
            return (
                <Autocomplete
                    disableClearable
                    onChange={onChangeHandler}
                    getOptionLabel={(option) => option.fullName}
                    value={options[getPhilosopherObjectIndex(currentPhilosopher, options )]}
                    options={options}
                    size="small"
                    sx={{ width: 210 }}
                    renderInput={(params) => <TextField {...params} label="Philosopher" />}
                    ListboxProps={{ style: { maxHeight: '80vh' }, position: "bottom-start" }}
                />
            )
        }
    }

    return (renderSelect())
}

export default Select