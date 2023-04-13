import React, { useEffect, useRef, useState } from 'react'
import OutsideAlerter from '../outside-alerter/outside-alerter'
import './mobile-select.css'
import { scrollCurrentPhilosopherIntoView } from './utils/utils'

export default function MobileSelect({ options, currentPhilosopher, onChangeHandler, placeholder, value }) {
    const [suggestions, setSuggestions] = useState([])
    const [searchText, setSearchText] = useState([])
    useEffect(() => setSearchText(value), [value])
    const scollToRef = useRef()

    useEffect(() => {
        scrollCurrentPhilosopherIntoView(searchText, scollToRef)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suggestions.length])

    const onFocusHandler = (e) => {
        setSearchText('')
        setSuggestions(options)
    }

    const onTextChange = (e) => {
        const value = e.target.value
        if (value === '') setSuggestions(options)
        else {
            let suggestions = []
            if (value.length > 0) {
                const regex = new RegExp(`${value}`, `i`)
                suggestions = options.filter(({ fullName }) => regex.test(fullName))
            }

            setSuggestions(suggestions)
        }
        setSearchText(value)
    }

    const onBlurHandler = () => {
        setSearchText(value)
    }

    const suggestionSelected = (fullName, value) => {
        if (value !== undefined) {
            setSuggestions([])
            setSearchText(fullName)
            onChangeHandler({ target: { value } })
        }
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul ref={scollToRef} className="dropDownList">
                {suggestions &&
                    suggestions.map(({ fullName, value }) => (
                        <li id={currentPhilosopher === value && 'active'} key={value} value={value} onClick={(e) => suggestionSelected(fullName, value)}>
                            {fullName}
                        </li>
                    ))}
            </ul>
        )
    }

    return (
        <OutsideAlerter callback={() => setSuggestions([])}>
            <div className="typeAheadDropDown">
                <input type="text" onFocus={onFocusHandler} onChange={onTextChange} placeholder={placeholder} value={searchText} onBlur={onBlurHandler} />
                {renderSuggestions()}
            </div>
        </OutsideAlerter>
    )
}
