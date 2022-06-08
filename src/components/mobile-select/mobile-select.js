import React, { useEffect, useState } from 'react';
import OutsideAlerter from '../outside-alerter/outside-alerter';
import './mobile-select.css';

export default function MobileSelect({ options, onChangeHandler, placeholder, value }) {
    const [suggestions, setSuggestions] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => setSearchText(value), [value]);

    const onFocusHandler = (e) => {
        setSearchText("");
        setSuggestions(options)
    }

    const onTextChange = (e) => {
        const value = e.target.value;
        if (value === "") setSuggestions(options)
        else {
            let suggestions = [];
            if (value.length > 0) {
                const regex = new RegExp(`${value}`, `i`);
                suggestions = options.filter(({ fullName }) => regex.test(fullName));
            }

            setSuggestions(suggestions);
        }
        setSearchText(value);
    }

    const onBlurHandler = () => {
        setSearchText(value)
    }

    const suggestionSelected = (fullName, value) => {
        if (value !== undefined) {
            setSuggestions([]);
            setSearchText(fullName);
            onChangeHandler({ target: { value } })
        }
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions && suggestions.map(
                    ({ id, fullName, value }) =>
                        <li
                            key={id} value={value}
                            onClick={(e) => suggestionSelected(fullName, value)}>
                            {fullName}
                        </li>
                )}
            </ul >
        )
    }

    return (
        <OutsideAlerter callback={() => setSuggestions([])}>
            <div className="TypeAheadDropDown">
                <input type="text"
                    onFocus={onFocusHandler}
                    onChange={onTextChange}
                    placeholder={placeholder}
                    value={searchText}
                    onBlur={onBlurHandler}
                />
                {renderSuggestions()}
            </div>
        </OutsideAlerter >
    );
}
