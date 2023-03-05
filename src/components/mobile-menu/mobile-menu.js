import download from 'downloadjs'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import translateImage from '../../static/assets/images/translate.png'
import OutsideAlerter from '../outside-alerter/outside-alerter'
import './mobile-menu.css'

function MobileMenu({ setTranslateKey, translateKey, markedMode, setMarkedMode, visible, toggleVisible, currentPhilosopher, currentData, setCurrentData, setOptions, markedQuotes, setMarkedQuotes, darkMode, setDarkMode }) {
    return (
        <>
            <OutsideAlerter callback={() => toggleVisible(false)}>
                <ul id="slide_menu" style={{ display: visible ? 'block' : 'none' }}>
                    <li>
                        <span className="mobile-translate-switch">
                            <img className="translate-img" src={translateImage} alt="Toggle to translate" />
                            Translate
                            <input
                                type="checkbox"
                                checked={translateKey}
                                onClick={({ target: { checked } }) => {
                                    setTranslateKey(checked)
                                }}
                            />
                        </span>
                    </li>
                    <li>
                        Marked Mode
                        <input
                            type="checkbox"
                            checked={markedMode}
                            onClick={({ target: { checked } }) => {
                                setMarkedMode(!checked)
                            }}
                        />
                    </li>
                    <li>
                        Dark Mode
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onClick={({ target: { checked } }) => {
                                setDarkMode(checked)
                            }}
                        />
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                download(JSON.stringify(window.localStorage), `local-storage-${uuidv4()}.txt`)
                            }}
                        >
                            Download Storage
                        </button>
                    </li>
                </ul>
            </OutsideAlerter>
        </>
    )
}

export default MobileMenu
