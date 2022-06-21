import React, { Suspense, useState } from "react";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import OPTIONS from "../../static/philosophers-data";
import { onPhilosopherSelectChange } from '../desktop-header/utils/utils';
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
const MobileMenu = React.lazy(() => import('../mobile-menu/mobile-menu'));
const Breadcrumb = React.lazy(() => import('../breadcrumb/breadcrumb'));

function MobileHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, isFetching, setIsFetching, translateKey, setTranslateKey, markedMode, setMarkedMode }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }
    const [visible, toggleVisible] = useState(false);
    const headerHeight = markedMode ? "3.5rem" : "1.5rem";

    return (
        <div className="header" style={{ height: headerHeight }}>
            <div className="mobile-column">
                {visible &&
                    (<Suspense fallback={""}>
                        <MobileMenu setTranslateKey={setTranslateKey} setTriggerChange={setTriggerChange} triggerChange={triggerChange} translateKey={translateKey} markedMode={markedMode} setMarkedMode={setMarkedMode} visible={visible} toggleVisible={toggleVisible} />
                    </Suspense>)}
                <div onClick={() => toggleVisible(!visible)}>
                    ☰Menu
                </div>
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
            {markedMode &&
                (<Suspense fallback={""}>
                    <Breadcrumb isFetching={isFetching} />
                </Suspense>)}
        </div >
    )
}

export default MobileHeader;