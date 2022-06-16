import Switch from '@mui/material/Switch';
import React, { useEffect, useState } from 'react';
import { getStorageValue, useLocalStorage } from '../../common/utils/localStorageUtils';
import { removeReadData, resetData } from '../../common/utils/staticDataUtils';
import { wipFeatureKey } from '../../common/utils/urlUtils';
import translateImage from "../../static/assets/images/translate.png";
import PHILOSOPHERS_DATA from "../../static/philosophers-data";
import { doOperationsOnData } from "../../static/utils/utils";
import OutsideAlerter from '../outside-alerter/outside-alerter';
import './mobile-menu.css';

export function MobileMenu({ setTranslateKey, setTriggerChange, triggerChange, translateKey, markedMode, setMarkedMode }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [visible, toggleVisible] = useState(false)
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
        }
        else {
            doOperationsOnData(PHILOSOPHERS_DATA, "alphabetical");
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
                    <li>
                        Marked Mode
                        <Switch size="small" checked={markedMode} onChange={({ target: { checked } }) => {
                            if (checked) {
                                setMarkedMode(true);
                                removeReadData()
                            }
                            else {
                                setMarkedMode(false);
                                resetData()
                            }
                        }} />
                    </li>

                    {wipFeatureKey() ?
                        (
                            <>

                                {/* <li>
                                    <SignIn setMarkedMode={setMarkedMode} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                                </li> */}

                            </>
                        ) : null}

                </ul>
            </OutsideAlerter>
        </>
    );
}
