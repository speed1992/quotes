import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import React from "react";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import OPTIONS from "../../static/philosophers-data";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
import { onPhilosopherSelectChange } from './utils/utils';

export function DesktopHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching, translateKey, setTranslateKey }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }
    return (
        <div className="header">
            <div className="row">
                <div className="column">
                    <WordLengthSearch listRef={listRef} setTriggerChange={setTriggerChange} triggerChange={triggerChange}
                        {...propsToSend}
                    />
                </div>
                <div className="column">
                    <TextField className="wordSearch" id="outlined-search" label="Search" type="search" size="small" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
                </div>
                <div className="column">
                    <Select
                        options={OPTIONS}
                        defaultOption={currentPhilosopher}
                        onChangeHandler={(_, { value: philosopher }) => onPhilosopherSelectChange({ philosopher, triggerChange, listRef, setTriggerChange, setIsFetching, setStart, setEnd, setSearchText })}
                    />
                </div>
                <div className="column">
                    <span className='vertically-middle'>Translate</span>
                    <Switch checked={translateKey} onChange={({ target: { checked } }) => setTranslateKey(checked)} />
                </div>
            </div>
        </div>
    )
}