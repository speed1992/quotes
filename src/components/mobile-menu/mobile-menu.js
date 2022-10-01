import Switch from '@mui/material/Switch';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorageValue } from '../../common/utils/localStorageUtils';
import { currentPhilosopher, resetData } from '../../common/utils/staticDataUtils';
// import { wipFeatureKey } from '../../common/utils/urlUtils';
import { setSortingRedux } from "../../components/home-page/homePageReduxSlice/homePageReduxSlice";
import translateImage from "../../static/assets/images/translate.png";
import PHILOSOPHERS_DATA from "../../static/philosophers-data";
import { doOperationsOnData } from "../../static/utils/utils";
import OutsideAlerter from '../outside-alerter/outside-alerter';
import { changeQuotesData } from '../quotes-list/utils/utils';
import './mobile-menu.css';

function MobileMenu({ setTranslateKey, setTriggerChange, triggerChange, translateKey, markedMode, setMarkedMode, visible, toggleVisible }) {
    // const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const sorting = useSelector(state => state.philosophersData.sorting);
    const setSorting = (value) => dispatch(setSortingRedux(value))

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
                                defaultChecked={sorting === "latest" ? true : false}
                            />
                            <label htmlFor="latest">Lastest</label>
                        </div>
                        <div>
                            <input type="radio" id="alphabetic" name="sortType"
                                onClick={onClickSortButtonHandler}
                                defaultChecked={sorting === "alphabetical" ? true : false}
                            />
                            <label htmlFor="alphabetic">Alphabetic</label>
                        </div>
                    </li>

                    {/* {wipFeatureKey() ?
                        ( */}
                    <>
                        <li>
                            Marked Mode
                            <Switch size="small" checked={markedMode} onChange={({ target: { checked } }) => {
                                if (checked) {
                                    setMarkedMode(true);
                                    changeQuotesData(currentPhilosopher, true)
                                }
                                else {
                                    setMarkedMode(false);
                                    resetData()
                                }
                            }} />
                        </li>
                        {/* <li>
                                    <SignIn setMarkedMode={setMarkedMode} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                                </li> */}

                    </>
                    {/* ) : null} */}

                </ul>
            </OutsideAlerter>
        </>
    );
}

export default MobileMenu;