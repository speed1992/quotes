import Switch from '@mui/material/Switch';
import React from "react";
import translateImage from "../../static/assets/images/translate.png";
import OPTIONS from "../../static/philosophers-data";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../static/utils/utils";
import { currentPhilosopher, setCurrentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToMemorizedRow } from "../../utils/utils";
import { changeQuotesData } from "../quotes-list/utils/utils";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
import "./header.css";


export function MobileHeader({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching, translateKey, setTranslateKey }) {
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
                        onChangeHandler={({ target: { value: philosopher } }) => {
                            function callback() {
                                setCurrentPhilosopher(philosopher);
                                changeQuotesData(philosopher);
                                setTriggerChange(!triggerChange)
                                scrollToMemorizedRow(listRef)
                                setIsFetching(false)
                            }
                            setStart(1)
                            setEnd("")
                            setSearchText('')
                            setIsFetching(true)

                            if (philosopher.trim().toLowerCase() === "all")
                                lazyLoadAllAssets().then(callback);
                            else
                                lazyLoadAsset(philosopher).then(callback);

                        }} />
                </div>

                <div className="mobile-column">
                    <span><img className="translate-img" src={translateImage} alt="Toggle to translate" /></span>
                    <Switch size="small" checked={translateKey} onChange={({ target: { checked } }) => setTranslateKey(checked)} />
                </div>

            </div>
            <div className="row">
                {searchText !== "" ? <span>Search Results: {searchText}</span> : null}
            </div>
        </div>
    )
}