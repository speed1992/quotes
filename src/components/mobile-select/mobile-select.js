// TypeAheadDropDown.js
import React from 'react';
import './mobile-select.css';

export default class MobileSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e) => {
        const { options } = this.props;
        let suggestions = [];
        const value = e.target.value;
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, `i`);
            suggestions = options.sort().filter(v => regex.test(v));
        }


        this.setState(() => ({
            suggestions,
            text: value
        }));
    }


    suggestionSelected = (value) => {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions = () => {
        const { suggestions } = this.state;
        console.log("suggestions :", suggestions);
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions && suggestions.map(
                    ({ id, fullName, value }) =>
                        <li
                            key={id} value={value}
                            onClick={(e) => this.suggestionSelected(value)}>
                            {fullName}
                        </li>
                )}
            </ul >
        )
    }


    render() {
        const { text } = this.state
        return (
            <div className="TypeAheadDropDown">
                <input onChange={this.onTextChange} placeholder="Search philosopher" value={text} type="text" />
                {this.renderSuggestions()}
            </div>
        );
    }

}