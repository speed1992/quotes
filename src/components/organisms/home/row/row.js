import React, { Suspense, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentModalName } from '../../../../common/components/modal/modalRedux'
import useSnackbar from '../../../../common/components/snackbar/useSnackbar'
import SmallLoader from '../../../../common/small-loader/small-loader'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isUndefined } from '../../../../common/utils/commonUtils'
import { debounce } from '../../../../common/utils/debounce'
import { setQuoteImageData } from '../../analysis/generate-quote-image/generateQuoteImageRedux'
import styles from './styles/row.module.css'
import { rowClickHandler } from './utils/utils'
const MarkAsRead = React.lazy(() => retryTenTimes(() => import('../../tools/mark-as-read/mark-as-read')))
const Translate = React.lazy(() => retryTenTimes(() => import('../../tools/translate/translate')))
const Audio = React.lazy(() => retryTenTimes(() => import('../../tools/audio/audio')))

const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef, darkMode, voiceSpeed, minMode }, style }) => {
    const [isLocalFetching, setIsLocalFetching] = useState({ button: '', status: false })
    const [AIResponse, setAIResponse] = useState(null)
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode, setIsLocalFetching }
    const [localTranslateKey, setLocalTranslateKey] = useState(false)
    const debouncedHandler = useCallback(
        debounce(() => setScrollPosition(parseInt(quotationId)), 500),
        [quotationId, setScrollPosition]
    )
    const dispatch = useDispatch()
    const rowHandler = useCallback(() => rowClickHandler({ quote: quotationText, openSnackbar, philosopherFullName }), [openSnackbar, philosopherFullName, quotationText])

    if (!isUndefined(currentQuote))
        return (
            <div role="row" className={styles.row} key={index} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                {AIResponse ? (
                    <>
                        <div>{AIResponse}</div>
                        <div className={styles.quoteDescription}>
                            <button onClick={() => setAIResponse(null)}>Close Description</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div role="columnheader" className="row">
                            <span onClick={rowHandler}>{`${index + 1}. "${quotationText}" ― ${philosopherFullName}`}</span>
                        </div>
                        <div role="columnheader" className="row">
                            {localTranslateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}
                        </div>

                        <div role="columnheader" className={styles.actionItems}>
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
                                    <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} setLocalTranslateKey={setLocalTranslateKey} />
                                </Suspense>
                            )}
                            {!minMode && (
                                <>
                                    <button onClick={() => setLocalTranslateKey(true)}>Translate {isLocalFetching.button === 'translate' && isLocalFetching.status && <SmallLoader darkMode />}</button>
                                    <button
                                        onClick={() => {
                                            dispatch(setQuoteImageData({ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth', share: true }))
                                            dispatch(setCurrentModalName('Image'))
                                        }}
                                        style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}
                                    >
                                        Share
                                    </button>
                                </>
                            )}
                            {/* <button
                                onClick={async () => {
                                    setIsLocalFetching({ button: 'describe_quote', status: true })
                                    const options = {
                                        method: 'POST',
                                        url: 'https://api.edenai.run/v2/text/topic_extraction',
                                        headers: {
                                            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGM1ZWJjMTktMGZlMi00NmU0LWJjM2QtOThkOTdiNTcyYWYxIiwidHlwZSI6ImFwaV90b2tlbiJ9.fQIkRStyHmpBofuqfieRHCnB5y0hhtSeLRh689nWHSs',
                                            'Content-Type': 'application/json',
                                        },
                                        data: {
                                            show_original_response: false,
                                            fallback_providers: '',
                                            providers: 'google, ibm, openai',
                                            text: `${quotationText} ${philosopherFullName}
                                            What is the meaning of this quote`,
                                            language: 'en',
                                        },
                                    }

                                    let str = ''
                                    let response = await retryTenTimes(() =>
                                        fetch(options.url, {
                                            method: options.method,
                                            headers: {
                                                'Content-Type': 'application/json',
                                                authorization: options.headers.authorization,
                                            },
                                            body: JSON.stringify(options.data),
                                        })
                                    )
                                    response = await response.json()

                                    const reponsesInArray = Object.values(response)
                                    reponsesInArray.forEach((val) => {
                                        if (val.items[0]?.category) str += `${val.items[0]?.category}`
                                    })

                                    setIsLocalFetching({ button: '', status: false })
                                    setAIResponse(JSON.stringify(str.replace(/\n/g, '')))
                                }}
                            >
                                Describe {isLocalFetching?.button === 'describe_quote' && isLocalFetching?.status && <SmallLoader darkMode />}
                            </button> */}
                        </div>
                    </>
                )}
            </div>
        )
}

export default Row
