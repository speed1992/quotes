import download from 'downloadjs'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import translateImage from '../../static/assets/images/translate.png'
import { setVoiceSpeedRedux } from '../home-page/homePageReduxSlice/homePageReduxSlice'
import OutsideAlerter from '../outside-alerter/outside-alerter'
import './mobile-menu.css'

function MobileMenu({ setTranslateKey, translateKey, markedMode, setMarkedMode, visible, toggleVisible, currentPhilosopher, currentData, setCurrentData, setOptions, markedQuotes, setMarkedQuotes, darkMode, setDarkMode }) {
    const voiceSpeed = useSelector(({ philosophersData: { voiceSpeed } }) => voiceSpeed)
    const dispatch = useDispatch()
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
                                onChange={({ target: { checked } }) => {
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
                            onChange={({ target: { checked } }) => {
                                setMarkedMode(checked)
                            }}
                        />
                    </li>
                    <li>
                        Dark Mode
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={({ target: { checked } }) => {
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
                            Backup Read Data
                        </button>
                    </li>
                    <li>
                        Voice Speed[1-20]
                        <input
                            onChange={(event) => {
                                dispatch(setVoiceSpeedRedux(event.target.value / 10))
                            }}
                            class="voiceSpeed"
                            type="text"
                            value={voiceSpeed * 10}
                        />
                    </li>
                </ul>
            </OutsideAlerter>
        </>
    )
}

export default MobileMenu
