import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import React from 'react'
import Select from '../select/select'
import { WordLengthSearch } from '../wordLengthSearch/wordLengthSearch'
import { onFocusHandler, onPhilosopherSelectChange } from './utils/utils'

function DesktopHeader({ listRef, setSearchText, searchText, start, end, setStart, setEnd, setIsFetching, markedMode, setMarkedMode, currentPhilosopher, setCurrentPhilosopher, options, setOptions, setCurrentData, setQuotesLoaded, isFetchingOptions, setIsFetchingOptions }) {
    const propsToSend = { start, end, setStart, setEnd, setSearchText }
    return (
        <div className="header">
            <div className="row">
                <div className="column">
                    <WordLengthSearch listRef={listRef} {...propsToSend} />
                </div>
                <div className="column">
                    <TextField className="wordSearch" id="outlined-search" label="Search" type="search" size="small" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
                </div>
                <div className="column">
                    <Select isFetchingOptions={isFetchingOptions} options={options} currentPhilosopher={currentPhilosopher} onFocusHandlerCallback={() => onFocusHandler({ options, isFetchingOptions, setIsFetchingOptions })} onChangeHandler={(_, { value: philosopher }) => onPhilosopherSelectChange({ philosopher, listRef, setIsFetching, setStart, setEnd, setSearchText, setCurrentPhilosopher, setCurrentData, options, setOptions, setQuotesLoaded })} />
                </div>
                <div className="column">
                    <span>
                        <span className="vertically"></span> Marked Mode
                        <Switch
                            checked={markedMode}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMarkedMode(true)
                                } else {
                                    setMarkedMode(false)
                                }
                            }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader
