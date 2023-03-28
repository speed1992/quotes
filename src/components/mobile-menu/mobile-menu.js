import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routes'
import { setVoiceSpeedRedux } from '../home-page/homePageRedux/homePageRedux'
import OutsideAlerter from '../outside-alerter/outside-alerter'
import './mobile-menu.css'

const BuildInfo = React.lazy(() => import('../build-info/build-info'))

function MobileMenu({ markedMode, setMarkedMode, visible, toggleVisible, darkMode, setDarkMode }) {
    const voiceSpeed = useSelector(({ philosophersData: { voiceSpeed } }) => voiceSpeed)

    const dispatch = useDispatch()
    return (
        <OutsideAlerter callback={() => toggleVisible(false)}>
            <ul id="slide_menu" style={{ display: visible ? 'block' : 'none' }}>
                <li>
                    Marked Mode
                    <input type="checkbox" checked={markedMode} onChange={({ target: { checked } }) => setMarkedMode(checked)} />
                </li>
                <li>
                    Dark Mode
                    <input type="checkbox" checked={darkMode} onChange={({ target: { checked } }) => setDarkMode(checked)} />
                </li>
                {/* <li>
                    <button
                        onClick={() => {
                            download(JSON.stringify(window.localStorage), `local-storage-${uuidv4()}.txt`)
                        }}
                    >
                        Backup Read Data
                    </button>
                </li> */}
                <li>
                    Voice Speed[1-20]
                    <input onChange={(event) => dispatch(setVoiceSpeedRedux(event.target.value / 10))} className="voiceSpeed" type="number" value={voiceSpeed ? voiceSpeed * 10 : ''} />
                </li>
                <li>
                    <Link to={ROUTES.report.route} style={{ textDecoration: 'none', color: '#000' }}>
                        <button>Open Report</button>
                    </Link>
                </li>
                <li>
                    <BuildInfo />
                </li>
            </ul>
        </OutsideAlerter>
    )
}

export default MobileMenu
