import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import React from "react";
import OPTIONS from "../../static/philosophers-data";
import { lazyLoadAllAssets, lazyLoadAsset } from "../../static/utils/utils";
import { currentPhilosopher, setCurrentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToMemorizedRow } from "../../utils/utils";
import { changeQuotesData } from "../quotes-list/utils/utils";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";

export function Header({ listRef, setSearchText, searchText, setTriggerChange, triggerChange, start, end, setStart, setEnd, setIsFetching, translateKey, setTranslateKey }) {
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
                        onChangeHandler={(_, { value: philosopher }) => {
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

                <div className="column">
                    <span>Translate</span>
                    <Switch checked={translateKey} onChange={({ target: { checked } }) => setTranslateKey(checked)} />
                </div>

            </div>
            <div className="row">
                {searchText !== "" ? <span>Search Results: {searchText}</span> : null}
            </div>
        </div>
    )
}