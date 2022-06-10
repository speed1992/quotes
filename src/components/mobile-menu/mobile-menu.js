import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import translateImage from "../../static/assets/images/translate.png";
import OutsideAlerter from '../outside-alerter/outside-alerter';
import { SORTING_BY_ALPHABETS, SORTING_BY_LATEST } from './constants';
import './mobile-menu.css';

export function SlideOutMenuContainer({ setTranslateKey, setTriggerChange, triggerChange, translateKey }) {

    const WIP = true;

    const [visible, toggleVisible] = useState(false)
    const [sortButtonText, setSortButtonText] = useState(SORTING_BY_LATEST)

    const onClickSortButtonHandler = () => {
        if (sortButtonText === SORTING_BY_LATEST)
            setSortButtonText(SORTING_BY_ALPHABETS);
        else {
            setSortButtonText(SORTING_BY_LATEST);
        }
    }

    return (
        <>
            <OutsideAlerter callback={() => toggleVisible(false)}>
                <div id="slide_nav_button" onClick={() => toggleVisible(!visible)}>
                    ☰Menu
                </div>
                <ul id='slide_menu' style={{ display: (visible ? 'block' : 'none') }}>
                    <li>
                        <span className="mobile-translate-switch">
                            <img className="translate-img" src={translateImage} alt="Toggle to translate" />
                            Translate
                            <Switch size="small" checked={translateKey} onChange={({ target: { checked } }) => {
                                setTranslateKey(checked);
                                setTriggerChange(!triggerChange);
                            }} />
                        </span>
                    </li>

                    {!WIP ? <li>
                        <button onClick={onClickSortButtonHandler}>{sortButtonText}</button>
                    </li> : null}

                </ul>
            </OutsideAlerter>
        </>
    );
}