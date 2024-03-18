import React from 'react'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { useHomePageHooks } from '../../home/home-page/utils/hooks'
import styles from './wordLengthSearch.module.css'
const DesktopWordLengthSearch = React.lazy(() => retryTenTimes(() => import('../../home/desktop/desktop-word-length-search/desktop-word-length-search')))

export function WordLengthSearch({ isMobile = true, isStartFeatureEnabled = false, label = false }) {
    const { start, end, setStart, setEnd } = useHomePageHooks()
    const renderComponent = () => {
        if (isMobile) {
            return (
                <>
                    {label && (
                        <label id="labelEnd" className={styles.labelEnd} htmlFor="end">
                            Words{' '}
                        </label>
                    )}
                    {isStartFeatureEnabled && <input id="start" className={styles.smallInput} key="start" name="start" type="number" min="0" value={start} onChange={({ target: { value } }) => setStart(value)} />}
                    <input id="end" className={`${styles.smallInput} ${isStartFeatureEnabled ? styles.endMargin : ''}`} key="end" name="end" type="number" min="0" value={end} onChange={({ target: { value } }) => setEnd(value)} />
                </>
            )
        } else {
            return <DesktopWordLengthSearch start={start} setStart={setStart} end={end} setEnd={setEnd} />
        }
    }
    return renderComponent()
}
