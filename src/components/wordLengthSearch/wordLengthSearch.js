import React from 'react'
import './wordLengthSearch.css'
const DesktopWordLengthSearch = React.lazy(() => import('../desktop-word-length-search/desktop-word-length-search'))

export function WordLengthSearch({ start, end, setStart, setEnd, setSearchText, isMobile }) {
    const renderComponent = () => {
        if (isMobile) {
            return (
                <>
                    <input className="smallInput" name="start" type="number" min="1" value={start} onChange={({ target: { value } }) => setStart(value)} />
                    <input className="smallInput" name="end" type="number" min="0" value={end} onChange={({ target: { value } }) => setEnd(value)} />
                </>
            )
        } else {
            return <DesktopWordLengthSearch start={start} setStart={setStart} end={end} setEnd={setEnd} />
        }
    }
    return renderComponent()
}
