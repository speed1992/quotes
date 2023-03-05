import Switch from '@mui/material/Switch'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortingRedux } from '../../components/home-page/homePageReduxSlice/homePageReduxSlice'
import translateImage from '../../static/assets/images/translate.png'
import OutsideAlerter from '../outside-alerter/outside-alerter'
import './mobile-menu.css'

function MobileMenu({ setTranslateKey, translateKey, markedMode, setMarkedMode, visible, toggleVisible, currentPhilosopher, currentData, setCurrentData, setOptions, markedQuotes, setMarkedQuotes }) {
    const dispatch = useDispatch()
    const sorting = useSelector((state) => state.philosophersData.sorting)
    const setSorting = (value) => dispatch(setSortingRedux(value))

    const onClickSortButtonHandler = ({ target: { id } }) => setSorting(id)

    return (
        <>
            <OutsideAlerter callback={() => toggleVisible(false)}>
                <ul id="slide_menu" style={{ display: visible ? 'block' : 'none' }}>
                    <li>
                        <span className="mobile-translate-switch">
                            <img className="translate-img" src={translateImage} alt="Toggle to translate" />
                            Translate
                            <Switch
                                size="small"
                                checked={translateKey}
                                onChange={({ target: { checked } }) => {
                                    setTranslateKey(checked)
                                }}
                            />
                        </span>
                    </li>
                    <li>
                        Sort philosophers:
                        <div>
                            <input type="radio" id="latest" name="sortType" onClick={onClickSortButtonHandler} defaultChecked={sorting === 'latest' ? true : false} />
                            <label htmlFor="latest">Lastest</label>
                        </div>
                        <div>
                            <input type="radio" id="alphabetical" name="sortType" onClick={onClickSortButtonHandler} defaultChecked={sorting === 'alphabetical' ? true : false} />
                            <label htmlFor="alphabetic">Alphabetic</label>
                        </div>
                    </li>
                    <li>
                        Marked Mode
                        <Switch
                            size="small"
                            checked={markedMode}
                            onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMarkedMode(true)
                                } else {
                                    setMarkedMode(false)
                                    // resetData()
                                }
                            }}
                        />
                    </li>
                </ul>
            </OutsideAlerter>
        </>
    )
}

export default MobileMenu
