import React from "react";
import { OPTIONS } from "../../constants/constants";
import { currentPhilosopher } from "../../utils/staticDataUtils";
import { scrollToMemorizedRow } from "../../utils/utils";
import { changeQuotesData } from "../quotes-list/utils/utils";
import Select from "../select/select";
import { WordLengthSearch } from "../wordLengthSearch/wordLengthSearch";
import "./header.css";

export function Header({ listRef, setSearchText, searchText, setTriggerChange, triggerChange }) {
    return (
        <>
            <div className="row">
                <div className="column">
                    <WordLengthSearch listRef={listRef} setTriggerChange={setTriggerChange} triggerChange={triggerChange} />
                    {/* <button
                        onClick={
                            () => {
                                resetSearch();
                                setSearchText('')
                                scrollToMemorizedRow(listRef)
                            }}>
                        Home
                    </button> */}
                </div>
                <div className="column">
                    <input
                        type="text"
                        placeholder="Search any word"
                        value={searchText}
                        onChange={({ target: { value } }) => {
                            setSearchText(value)
                        }}
                    />
                </div>
                <div className="column">
                    <Select
                        options={OPTIONS}
                        defaultOption={currentPhilosopher}
                        onChangeHandler={({ target: { value } }) => {
                            setSearchText('')
                            changeQuotesData(value);
                            setTriggerChange(!triggerChange)
                            scrollToMemorizedRow(listRef)
                        }} />
                </div>
            </div>

        </>
    )
}