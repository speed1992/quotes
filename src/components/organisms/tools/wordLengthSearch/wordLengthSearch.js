import React from 'react'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import './wordLengthSearch.css'
const DesktopWordLengthSearch = React.lazy(() => retryTenTimes(() => import('../../home/desktop/desktop-word-length-search/desktop-word-length-search')))

export function WordLengthSearch({ start, end, setStart, setEnd, setSearchText, isMobile }) {
    const renderComponent = () => {
        if (isMobile) {
            return (
                <>
                    {/* <input className="smallInput" key="start" name="start" type="number" min="1" value={start} onChange={({ target: { value } }) => setStart(value)} /> */}
                    <input className="smallInput" key="end" name="end" type="number" min="0" value={end} onChange={({ target: { value } }) => setEnd(value)} />
                </>
            )
        } else {
            return <DesktopWordLengthSearch start={start} setStart={setStart} end={end} setEnd={setEnd} />
        }
    }
    return renderComponent()
}
