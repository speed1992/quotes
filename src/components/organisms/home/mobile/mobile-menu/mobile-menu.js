import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentModalName } from '../../../../../common/components/modal/modalRedux'
import useSnackbar from '../../../../../common/components/snackbar/useSnackbar'
import SmallLoader from '../../../../../common/small-loader/small-loader'
import { retryTenTimes } from '../../../../../common/utils/apiUtils'
import { checkQueryParams } from '../../../../../common/utils/urlUtils'
import { WordLengthSearch } from '../../../tools/wordLengthSearch/wordLengthSearch'
import { ALPHABETICAL, LATEST } from '../../home-page/constants/constants'
import { setAutoPopulateWordCountRedux, setEndRedux, setStartRedux, setVoiceSpeedRedux, setVoiceTypeRedux } from '../../home-page/homePageRedux/homePageRedux'
import styles from './mobile-menu.module.css'
const BuildInfo = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "BuildInfo" */ '../../../tools/build-info/build-info')))
const LoginRegister = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "LoginRegister" */ '../login-register/login-register')))
const OutsideAlerter = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "OutsideAlerter" */ '../../../../../common/components/outside-alerter/outside-alerter')))

function MobileMenu({ markedMode, setMarkedMode, visible, toggleVisible, darkMode, setDarkMode, setSorting, sorting, userName, setUserName, setMarkedQuotes, isLoggedIn, setIsLoggedIn, password, setPassword, setIsFetching }) {
    const voiceSpeed = useSelector(({ philosophersData: { voiceSpeed } }) => voiceSpeed)
    const voiceType = useSelector(({ philosophersData: { voiceType } }) => voiceType)
    const populateWordCount = useSelector(({ philosophersData: { populateWordCount } }) => populateWordCount)
    const markedQuotes = useSelector(({ philosophersData: { markedQuotes } }) => markedQuotes)
    const [voices, setVoices] = useState([])
    const [openSnackbar] = useSnackbar()

    const dispatch = useDispatch()

    const onClickSortButtonHandler = (event) => {
        const id = event.target.id

        if (id === LATEST) setSorting(LATEST)
        else setSorting(ALPHABETICAL)
    }

    useEffect(() => {
        function setSpeech() {
            return new Promise(function (resolve) {
                let synth = window.speechSynthesis
                let id

                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices())
                        clearInterval(id)
                    }
                }, 10)
            })
        }

        let s = setSpeech()
        s.then((voices) => setVoices(voices))
    }, [])

    return (
        <OutsideAlerter callback={useCallback(() => toggleVisible(false), [toggleVisible])}>
            <ul className={`${styles.slide_menu} ${darkMode ? styles.darkTheme : styles.lightTheme}`} id="slide_menu" style={{ display: visible ? 'block' : 'none' }}>
                <li>
                    <div>Words Count</div> <div>Start & End</div>
                    <WordLengthSearch isStartFeatureEnabled={true} />
                    <button
                        className={styles.leftMargin}
                        onClick={() => {
                            if (!populateWordCount) {
                                dispatch(setStartRedux(1))
                                dispatch(setEndRedux(''))
                            }
                        }}
                    >
                        Reset
                    </button>
                </li>
                <li key="6">
                    <button onClick={useCallback(() => dispatch(setCurrentModalName('Report')), [])}>Open Report</button>
                </li>

                <li key="2">
                    Marked Mode
                    <input
                        type="checkbox"
                        checked={markedMode}
                        onChange={({ target: { checked } }) => {
                            setMarkedMode(checked)
                            dispatch(setAutoPopulateWordCountRedux(false))
                            if (!checked) {
                                dispatch(setStartRedux(1))
                                dispatch(setEndRedux(''))
                            }
                        }}
                    />
                </li>

                {markedMode && (
                    <li key="16">
                        Set Minimum Word Count
                        <input
                            type="checkbox"
                            checked={populateWordCount}
                            onChange={({ target: { checked } }) => {
                                dispatch(setAutoPopulateWordCountRedux(checked))
                                if (!checked) {
                                    dispatch(setStartRedux(1))
                                    dispatch(setEndRedux(''))
                                }
                            }}
                        />
                    </li>
                )}
                <li key="3">
                    Dark Mode
                    <input type="checkbox" checked={darkMode} onChange={({ target: { checked } }) => setDarkMode(checked)} />
                </li>
                <li key="4">
                    Voice Speed[1-20]
                    <input onChange={(event) => dispatch(setVoiceSpeedRedux(event.target.value / 10))} className={styles.voiceSpeed} type="number" value={voiceSpeed ? voiceSpeed * 10 : ''} />
                </li>
                <li key="5">
                    <div>Available Voices</div>
                    {voices?.length !== 0 ? (
                        <select
                            onChange={(event) => {
                                dispatch(setVoiceTypeRedux(event?.target?.value))
                                speechSynthesis.cancel()
                            }}
                            className={styles.voices}
                            value={voiceType}
                        >
                            {voices?.map((voice, index) => (
                                <option value={index} key={voice?.name}>
                                    {voice?.name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <div className={`${styles.textCenter} ${styles.paddingTop}`}>
                            <SmallLoader darkMode />
                        </div>
                    )}
                </li>

                <li key="1">
                    Sort philosophers
                    <div>
                        <input type="radio" id={LATEST} name="sortType" onClick={onClickSortButtonHandler} defaultChecked={sorting === LATEST} />
                        <label htmlFor={LATEST}>Latest</label>
                    </div>
                    <div>
                        <input type="radio" id={ALPHABETICAL} name="sortType" onClick={onClickSortButtonHandler} defaultChecked={sorting === ALPHABETICAL} />
                        <label htmlFor={ALPHABETICAL}>Alphabetical</label>
                    </div>
                </li>

                <li key="7">
                    <LoginRegister {...{ setUserName, userName, openSnackbar, isLoggedIn, setIsLoggedIn, setMarkedQuotes, markedQuotes, password, setPassword, setIsFetching }} />
                    {!isLoggedIn && <div className={styles.backupNote}>You can login to backup your marked quotes in database in case browser data gets deleted.</div>}
                </li>

                <li key="8">
                    <BuildInfo />
                </li>
                {checkQueryParams('dev') && (
                    <li key="9">
                        <button onClick={useCallback(() => dispatch(setCurrentModalName('Logs')), [])}>Open Dev Logs</button>
                    </li>
                )}
            </ul>
        </OutsideAlerter>
    )
}

export default MobileMenu
