import Switch from '@mui/material/Switch';
import React from "react";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import translateImage from "../../static/assets/images/translate.png";
import OPTIONS from "../../static/philosophers-data";
import { onPhilosopherSelectChange } from '../desktop-header/utils/utils';
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";

function MobileHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching, translateKey, setTranslateKey }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }

    return (
        <div className="header">
            <div className="row">
                <div className="mobile-column">
                    <WordLengthSearch isMobile={true} vlistRef={listRef} setTriggerChange={setTriggerChange} triggerChange={triggerChange}
                        {...propsToSend}
                    />
                </div>
                <div className="mobile-column">
                    <input className="wordSearch" type="text" placeholder="Search word" value={searchText} onChange={({ target: { value } }) => setSearchText(value)}
                    />
                </div>
                <div className="mobile-column">
                    <Select
                        isMobile={true}
                        options={OPTIONS}
                        defaultOption={currentPhilosopher}
                        onChangeHandler={({ target: { value: philosopher } }) => onPhilosopherSelectChange({ philosopher, triggerChange, listRef, setTriggerChange, setIsFetching, setStart, setEnd, setSearchText })}
                    />
                </div>
                <div className="mobile-column">
                    <span><img className="translate-img" src={translateImage} alt="Toggle to translate" /></span>
                    <Switch size="small" checked={translateKey} onChange={({ target: { checked } }) => {
                        setTranslateKey(checked);
                        setTriggerChange(!triggerChange);
                    }} />
                </div>

            </div>
        </div>
    )
}

export default MobileHeader;