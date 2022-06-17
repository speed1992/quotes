import React, { useEffect, useState } from "react";
import { getReadArrayFromLocalStorage } from "../../common/utils/localStorageUtils";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import OPTIONS from "../../static/philosophers-data";
import { getCurrentTotalQuotesCount } from "../../static/utils/utils";
import { onPhilosopherSelectChange } from '../desktop-header/utils/utils';
import { MobileMenu } from "../mobile-menu/mobile-menu";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
import styles from "./mobile-header.module.css"

function MobileHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, isFetching, setIsFetching, translateKey, setTranslateKey, markedMode, setMarkedMode }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }

    const [quoteCounts, setQuoteCounts] = useState({ totalQuoteCount: "NA", readCount: "NA", unreadCount: "NA" });


    useEffect(() => {

        if (!isFetching) {

            const totalQuoteCount = getCurrentTotalQuotesCount();
            const readCount = getReadArrayFromLocalStorage().length;
            const unreadCount = totalQuoteCount - readCount;

            setQuoteCounts({ totalQuoteCount, readCount, unreadCount })
        }


    }, [isFetching]);

    const { totalQuoteCount, readCount, unreadCount } = quoteCounts;

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
            {!isFetching ?
                (<div className={styles.quotesCountRow} >
                    Read: {readCount} Unread: {unreadCount} Total: {totalQuoteCount}
                </div>)
                : null}

        </div >
    )
}

export default MobileHeader;