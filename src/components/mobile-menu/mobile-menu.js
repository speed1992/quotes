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

    const onClickSortButtonHandler = () => {
        if (sortButtonText === SORTING_BY_LATEST) {
            doOperationsOnData(PHILOSOPHERS_DATA, "alphabetical");
            setSortButtonText(SORTING_BY_ALPHABETS);
            setSorting("alphabetical");
        }
        else {
            doOperationsOnData(PHILOSOPHERS_DATA, "latest");
            setSortButtonText(SORTING_BY_LATEST);
            setSorting("latest");
        }
    }

    useEffect(() => {
        setSorting(getStorageValue("SORT", "alphabetical"))
    }, [sorting]);

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
                        <button onClick={onClickSortButtonHandler}>{sortButtonText}</button>
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
