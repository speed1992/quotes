import React from "react";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import OPTIONS from "../../static/philosophers-data";
import { onPhilosopherSelectChange } from '../desktop-header/utils/utils';
import { MobileMenu } from "../mobile-menu/mobile-menu";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";

function MobileHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching, translateKey, setTranslateKey, markedMode, setMarkedMode }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }

    return (
        <div className="header">
            <div className="mobile-column">
                <MobileMenu setTranslateKey={setTranslateKey} setTriggerChange={setTriggerChange} triggerChange={triggerChange} translateKey={translateKey} markedMode={markedMode} setMarkedMode={setMarkedMode} />
            </div>
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

        </div>
    )
}

export default MobileHeader;