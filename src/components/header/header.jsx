import React from "react";
import OPTIONS from "../../static/philosophers-data";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../static/utils/utils";
import { currentPhilosopher, setCurrentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToMemorizedRow } from "../../utils/utils";
import { changeQuotesData } from "../quotes-list/utils/utils";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
import "./header.css";

export function Header({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching }) {
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
                    <input className="wordSearch" type="text" placeholder="Search word" value={searchText} onChange={({ target: { value } }) => {
                        setSearchText(value)
                        setStart(1)
                        setEnd("")
                    }}
                    />
                </div>
                <div className="column">
                    <Select
                        options={OPTIONS}
                        defaultOption={currentPhilosopher}
                        onChangeHandler={({ target: { value: philosopher } }) => {
                            setStart(1)
                            setEnd("")
                            setSearchText('')
                            setIsFetching(true)

                            if (philosopher.trim().toLowerCase() === "all") {
                                lazyLoadAllAssets().then(() => {
                                    debugger;
                                    setCurrentPhilosopher(philosopher);
                                    changeQuotesData(philosopher);
                                    setTriggerChange(!triggerChange)
                                    scrollToMemorizedRow(listRef)
                                    setIsFetching(false)
                                });
                            } else {
                                lazyLoadAsset(philosopher).then(() => {
                                    setCurrentPhilosopher(philosopher);
                                    changeQuotesData(philosopher);
                                    setTriggerChange(!triggerChange)
                                    scrollToMemorizedRow(listRef)
                                    setIsFetching(false)
                                });
                            }

                        }} />
                </div>
            </div>
            <div className="row">
                {searchText !== "" ? <span>Search Results: {searchText}</span> : null}
            </div>
        </div>
    )
}