import React, { Suspense, useState } from "react";
import { onPhilosopherSelectChange } from '../desktop-header/utils/utils';
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
const MobileMenu = React.lazy(() => import('../mobile-menu/mobile-menu'));
const Breadcrumb = React.lazy(() => import('../breadcrumb/breadcrumb'));

function MobileHeader({ listRef, setSearchText, searchText, start, end, setStart, setEnd, isFetching, setIsFetching, translateKey, setTranslateKey, markedMode, setMarkedMode,setCurrentData, currentPhilosopher, setCurrentPhilosopher, options,setOptions,setQuotesLoaded }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText, setCurrentData, }
    const [visible, toggleVisible] = useState(false);
    const headerHeight = markedMode ? "3.5rem" : "1.5rem";

    return (
        <div className="header" style={{ height: headerHeight }}>
            <div className="mobile-column">
                {visible &&
                    (<Suspense fallback={""}>
                        <MobileMenu setTranslateKey={setTranslateKey} translateKey={translateKey} markedMode={markedMode} setMarkedMode={setMarkedMode} visible={visible} toggleVisible={toggleVisible} />
                    </Suspense>)}
                <div onClick={() => toggleVisible(!visible)}>
                    ☰Menu
                </div>
            </div>
            <div className="mobile-column">
                <WordLengthSearch isMobile={true} vlistRef={listRef}  {...propsToSend}         />
            </div>
            <div className="mobile-column">
                <input className="wordSearch" type="text" placeholder="Search word" value={searchText} onChange={({ target: { value } }) => setSearchText(value)}
                />
            </div>
            <div className="mobile-column">
                <Select
                    isMobile={true}
                    options={options}
                    currentPhilosopher={currentPhilosopher}
                    onChangeHandler={({ target: { value: philosopher } }) => onPhilosopherSelectChange({ philosopher, listRef,  setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData,options,setOptions,setQuotesLoaded })}
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