import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { setEndRedux, setStartRedux } from '../../home/home-page/homePageRedux/homePageRedux'
import styles from './wordLengthSearch.module.css'
const DesktopWordLengthSearch = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "DesktopWordLengthSearch" */ '../../home/desktop/desktop-word-length-search/desktop-word-length-search')))

export function WordLengthSearch({ isMobile = true, isStartFeatureEnabled = false, label = false }) {
    const dispatch = useDispatch()
    const { start, end, populateWordCount } = useSelector((state) => state.philosophersData)

    const renderComponent = () => {
        if (isMobile) {
            return (
                <>
                    {label && (
                        <label id="labelEnd" className={styles.labelEnd} htmlFor="end">
                            Words{' '}
                        </label>
                    )}
                    {isStartFeatureEnabled && <input id="start" className={styles.smallInput} key="start" name="start" type="number" min="0" value={start} onChange={({ target: { value } }) => dispatch(setStartRedux(value))} disabled={populateWordCount} />}
                    <input id="end" className={`${styles.smallInput} ${isStartFeatureEnabled ? styles.endMargin : ''}`} key="end" name="end" type="number" min="0" value={end} onChange={({ target: { value } }) => dispatch(setEndRedux(value))} disabled={populateWordCount} />
                </>
            )
        }

        else {
            return <DesktopWordLengthSearch start={start} />
        }
    }
    return renderComponent()
}
