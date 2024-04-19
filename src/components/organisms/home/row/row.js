import React, { Suspense, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentModalName } from '../../../../common/components/modal/modalRedux'
import useSnackbar from '../../../../common/components/snackbar/useSnackbar'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isUndefined } from '../../../../common/utils/commonUtils'
import { debounce } from '../../../../common/utils/debounce'
import { setQuoteImageData } from '../../analysis/generate-quote-image/generateQuoteImageRedux'
import styles from './styles/row.module.css'
import { rowClickHandler } from './utils/utils'
const MarkAsRead = React.lazy(() => retryTenTimes(() => import('../../tools/mark-as-read/mark-as-read')))
const Audio = React.lazy(() => retryTenTimes(() => import('../../tools/audio/audio')))

const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef, darkMode, voiceSpeed, minMode }, style }) => {
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const debouncedHandler = useCallback(
        debounce(() => setScrollPosition(parseInt(quotationId)), 500),
        [quotationId, setScrollPosition]
    )
    const dispatch = useDispatch()
    const rowHandler = useCallback(() => rowClickHandler({ quote: quotationText, openSnackbar, philosopherFullName }), [openSnackbar, philosopherFullName, quotationText])

    const height = document.querySelectorAll('#actionItems')[0]?.offsetHeight + 88 || 250

    console.log('height', height)

    if (!isUndefined(currentQuote))
        return (
            <div role="row" className={styles.row} key={index} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <div role="columnheader" className={styles.rowChild} style={{ height: `calc(100% - ${height}px)` }}>
                    <div className={styles.quoteText}>{`${index + 1}. "${quotationText}" ― ${philosopherFullName}`}</div>
                </div>
                <div role="columnheader" id="actionItems" className={styles.actionItems}>
                    <button onClick={rowHandler}>Copy</button>
                    <button
                        onClick={() => {
                            dispatch(setQuoteImageData({ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth' }))
                            dispatch(setCurrentModalName('Image'))
                        }}
                        style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}
                    >
                        Download
                    </button>
                    {!minMode && <Audio index={index} currentData={currentData} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} listRef={listRef} voiceSpeed={voiceSpeed} />}
                    {markedMode && (
                        <Suspense fallback={''}>
                            <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} />
                        </Suspense>
                    )}
                    {!minMode && (
                        <button
                            onClick={() => {
                                dispatch(setQuoteImageData({ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth', share: true }))
                                dispatch(setCurrentModalName('Image'))
                            }}
                            style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}
                        >
                            Share
                        </button>
                    )}
                </div>
            </div>
        )
}

export default Row
