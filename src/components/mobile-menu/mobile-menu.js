import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import translateImage from "../../static/assets/images/translate.png";
import OutsideAlerter from '../outside-alerter/outside-alerter';
import './mobile-menu.css';

export function SlideOutMenuContainer({ setTranslateKey, setTriggerChange, triggerChange, translateKey }) {

    const [visible, toggleVisible] = useState(false)

    return (
        <>
            <OutsideAlerter callback={() => toggleVisible(!visible)}>
                <span id="slide_nav_button" onClick={() => {
                    console.log("clicked", visible)
                    toggleVisible(!visible)
                }}>☰</span>

                <ul id='slide_menu' style={{ display: (visible ? 'block' : 'none') }}>
                    <li>
                        <span>
                            <img className="translate-img" src={translateImage} alt="Toggle to translate" />
                        </span>
                        <Switch size="small" checked={translateKey} onChange={({ target: { checked } }) => {
                            setTranslateKey(checked);
                            setTriggerChange(!triggerChange);
                        }} />
                    </li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
            </OutsideAlerter>
        </>
    );
}