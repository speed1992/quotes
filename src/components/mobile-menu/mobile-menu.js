import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { retryTenTimes } from '../../common/utils/apiUtils'
import ROUTES from '../../routes/routes'
import { ALPHABETICAL, LATEST } from '../home-page/constants/constants'
import { setVoiceSpeedRedux } from '../home-page/homePageRedux/homePageRedux'
import OutsideAlerter from '../outside-alerter/outside-alerter'
import './mobile-menu.css'
import { sendUserDetails } from './utils/utils'

const BuildInfo = React.lazy(() => retryTenTimes(() => import('../build-info/build-info')))

function MobileMenu({ markedMode, setMarkedMode, visible, toggleVisible, darkMode, setDarkMode, setSorting, sorting, userName, setUserName }) {
    const voiceSpeed = useSelector(({ philosophersData: { voiceSpeed } }) => voiceSpeed)
    const markedQuotes = useSelector(({ philosophersData: { markedQuotes } }) => markedQuotes)

    const dispatch = useDispatch()

    const onClickSortButtonHandler = (event) => {
        const id = event.target.id

        if (id === LATEST) setSorting(LATEST)
        else setSorting(ALPHABETICAL)
    }

    return (
        <OutsideAlerter callback={() => toggleVisible(false)}>
            <ul id="slide_menu" style={{ display: visible ? 'block' : 'none' }}>
                <li>
                    Sort philosophers
                    <div>
                        <input type="radio" id={LATEST} name="sortType" onClick={onClickSortButtonHandler} defaultChecked={sorting === LATEST ? true : false} />
                        <label htmlFor={LATEST}>Latest</label>
                    </div>
                    <div>
                        <input type="radio" id={ALPHABETICAL} name="sortType" onClick={onClickSortButtonHandler} defaultChecked={sorting === ALPHABETICAL ? true : false} />
                        <label htmlFor={ALPHABETICAL}>Alphabetical</label>
                    </div>
                </li>
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
                    Username
                    <input className="userName" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <button onClick={() => sendUserDetails({ userName, markedQuotes })}>Sync with Database</button>
                </li>
                <li>
                    <BuildInfo />
                </li>
            </ul>
        </OutsideAlerter>
    )
}

export default MobileMenu
