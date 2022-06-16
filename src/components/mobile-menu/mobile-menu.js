import Switch from '@mui/material/Switch';
import React, { useState, useEffect } from 'react';
import { wipFeatureKey } from '../../common/utils/urlUtils';
import { doOperationsOnData } from "../../static/utils/utils";
import translateImage from "../../static/assets/images/translate.png";
import OutsideAlerter from '../outside-alerter/outside-alerter';
import { SignIn } from '../sign-in/sign-in';
import { SORTING_BY_ALPHABETS, SORTING_BY_LATEST } from './constants';
import './mobile-menu.css';
import PHILOSOPHERS_DATA from "../../static/philosophers-data";
import { getStorageValue, useLocalStorage } from '../../common/utils/localStorageUtils';

export function MobileMenu({ setTranslateKey, setTriggerChange, triggerChange, translateKey, markedMode, setMarkedMode }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [visible, toggleVisible] = useState(false)
    const [sortButtonText, setSortButtonText] = useState(SORTING_BY_LATEST)
    const [sorting, setSorting] = useLocalStorage("SORT", "alphabetical");

    const onClickSortButtonHandler = (event) => {
        const id = event.target.id;

        if (id === "latest")
            setSorting("latest");
        else
            setSorting("alphabetical");
    }

    useEffect(() => {
        setSorting(getStorageValue("SORT", "alphabetical"))
        if (sorting === "latest") {
            doOperationsOnData(PHILOSOPHERS_DATA, "latest");
            setSortButtonText(SORTING_BY_ALPHABETS);
        }
        else {
            doOperationsOnData(PHILOSOPHERS_DATA, "alphabetical");
            setSortButtonText(SORTING_BY_LATEST);
        }
    }, [sorting, setSorting]);

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
                    <li>
                        Sort philosophers:
                        <div>
                            <input type="radio" id="latest" name="sortType"
                                onClick={onClickSortButtonHandler}
                                checked={sorting === "latest" ? true : false}
                            />
                            <label for="latest">Lastest</label>
                        </div>
                        <div>
                            <input type="radio" id="alphabetic" name="sortType"
                                onClick={onClickSortButtonHandler}
                                checked={sorting === "alphabetical" ? true : false}
                            />
                            <label for="alphabetic">Alphabetic</label>
                        </div>

                    </li>

                    {wipFeatureKey() ?
                        (
                            <>
                                <li>
                                    <span className="">
                                        {/* <img className="translate-img" src={""} alt="" /> */}
                                        Marked Mode
                                        <Switch size="small" checked={markedMode} onChange={({ target: { checked } }) => {
                                            if (markedMode)
                                                setMarkedMode(false);
                                        }} />
                                    </span>
                                </li>
                                <li>
                                    <SignIn setMarkedMode={setMarkedMode} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                                </li>

                            </>
                        ) : null}

                </ul>
            </OutsideAlerter>
        </>
    );
}
