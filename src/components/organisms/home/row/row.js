import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentModalName } from '../../../../common/components/modal/modalRedux'
import useSnackbar from '../../../../common/components/snackbar/useSnackbar'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isUndefined } from '../../../../common/utils/commonUtils'
import { debounce } from '../../../../common/utils/debounce'
import { setQuoteImageData } from '../../analysis/generate-quote-image/generateQuoteImageRedux'
import styles from './styles/row.module.css'
import { didntUnderstandHandler, rowClickHandler } from './utils/utils'

const MarkAsRead = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "MarkAsRead" */ '../../tools/mark-as-read/mark-as-read')))
const Audio = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "Audio" */ '../../tools/audio/audio')))

const Row = ({ data: { philosopherFullName, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef, darkMode, voiceSpeed, minMode }, style }) => {
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote

    const debouncedHandler = useCallback(
        debounce(() => setScrollPosition(parseInt(quotationId)), 500),
        [quotationId, setScrollPosition]
    )

    const dispatch = useDispatch()

    const rowHandler = useCallback(() => rowClickHandler({ quote: quotationText, openSnackbar, philosopherFullName }), [openSnackbar, philosopherFullName, quotationText])
    const didntUnderstand = useCallback(() => didntUnderstandHandler({ quote: quotationText, openSnackbar, philosopherFullName }), [openSnackbar, philosopherFullName, quotationText])

    if (!isUndefined(currentQuote)) {
        return (
            <div role="row" className={styles.row} key={index} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <div role="columnheader" className={styles.rowChild}>
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
                    <Audio index={index} currentData={currentData} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} listRef={listRef} voiceSpeed={voiceSpeed} />
                    {markedMode && <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} />}
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
                    <button onClick={didntUnderstand}>Didn't Understand</button>
                </div>
            </div>
        )
    }
    return null
}

export default Row
