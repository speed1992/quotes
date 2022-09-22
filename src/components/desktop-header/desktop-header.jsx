import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import React from "react";
import { currentPhilosopher, resetData } from "../../common/utils/staticDataUtils";
import translateImage from "../../static/assets/images/translate.png";
import OPTIONS from "../../static/philosophers-data";
import { changeQuotesData } from '../quotes-list/utils/utils';
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
import { onPhilosopherSelectChange } from './utils/utils';

function DesktopHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching, translateKey, setTranslateKey, markedMode, setMarkedMode }) {
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
                    <span>
                        <img className="translate-img" src={translateImage} alt="Toggle to translate" />
                        <span className='vertically'></span> Translate
                        <Switch checked={translateKey} onChange={({ target: { checked } }) => {
                            setTranslateKey(checked)
                            setTriggerChange(!triggerChange);
                        }} />
                    </span>
                </div>
                <div className="column">
                    <span>
                        <span className='vertically'></span>  Marked Mode
                        <Switch checked={markedMode} onChange={({ target: { checked } }) => {
                            if (checked) {
                                setMarkedMode(true);
                                changeQuotesData(currentPhilosopher, true)
                            }
                            else {
                                setMarkedMode(false);
                                resetData()
                            }
                        }} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader;