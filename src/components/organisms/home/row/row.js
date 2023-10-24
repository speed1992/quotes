import axios from 'axios'
import React, { Suspense, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import useSnackbar from '../../../../common/components/snackbar/useSnackbar'
import ROUTES from '../../../../common/routes/routes'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isUndefined } from '../../../../common/utils/commonUtils'
import { debounce } from '../../../../common/utils/debounce'
import styles from './styles/row.module.css'
import { rowClickHandler, usePrevious } from './utils/utils'
const MarkAsRead = React.lazy(() => retryTenTimes(() => import('../../tools/mark-as-read/mark-as-read')))
const Translate = React.lazy(() => retryTenTimes(() => import('../../tools/translate/translate')))
const Audio = React.lazy(() => retryTenTimes(() => import('../../tools/audio/audio')))

const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef, darkMode, scheduledPosts, setScheduledQuotes, rowsRendered, setRowsRendered, voiceSpeed, minMode }, style }) => {
    const [AIResponse, setAIResponse] = useState(null)
    const prevCurrentPhilosopher = usePrevious(currentPhilosopher)
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode }
    const [localTranslateKey, setLocalTranslateKey] = useState(false)
    const debouncedHandler = useCallback(
        debounce(() => setScrollPosition(parseInt(quotationId)), 500),
        [quotationId, setScrollPosition]
    )
    const rowHandler = useCallback(() => rowClickHandler({ quote: quotationText, openSnackbar, philosopherFullName }), [openSnackbar, philosopherFullName, quotationText])

    if (prevCurrentPhilosopher && prevCurrentPhilosopher !== currentPhilosopher && rowsRendered === false) {
        setRowsRendered(true)
    }
    console.log('rendered')
    if (!isUndefined(currentQuote))
        return (
            <div role="row" className={styles.row} key={index} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                {AIResponse ? (
                    <div>{AIResponse}</div>
                ) : (
                    <>
                        <div role="columnheader" className="row">
                            <span onClick={rowHandler}>{`${index + 1}. "${quotationText}" ― ${philosopherFullName}`}</span>
                        </div>
                        <div role="columnheader" className="row">
                            {localTranslateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}
                        </div>

                        <div role="columnheader" className={styles.actionItems}>
                            <button>
                                <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth' }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}>
                                    Download Image
                                </Link>
                            </button>
                            {!minMode && <Audio index={index} currentData={currentData} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} listRef={listRef} voiceSpeed={voiceSpeed} />}
                            {markedMode && (
                                <Suspense fallback={''}>
                                    <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} setLocalTranslateKey={setLocalTranslateKey} />
                                </Suspense>
                            )}
                            {!minMode && (
                                <>
                                    <button onClick={() => setLocalTranslateKey(true)}>Translate</button>
                                    <button>
                                        <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth', share: true }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}>
                                            Share Image
                                        </Link>
                                    </button>
                                </>
                            )}
                            <button
                                onClick={async () => {
                                    console.log('clicked')
                                    const options = {
                                        method: 'POST',
                                        url: 'https://api.edenai.run/v2/text/topic_extraction',
                                        headers: {
                                            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGM1ZWJjMTktMGZlMi00NmU0LWJjM2QtOThkOTdiNTcyYWYxIiwidHlwZSI6ImFwaV90b2tlbiJ9.fQIkRStyHmpBofuqfieRHCnB5y0hhtSeLRh689nWHSs',
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
                                    await axios
                                        .request(options)
                                        .then((response) => {
                                            console.log(JSON.stringify(response.data))
                                            const reponsesInArray = Object.values(response.data)
                                            console.log(reponsesInArray.length)
                                            reponsesInArray.forEach((val) => {
                                                console.log(val)
                                                if (val.items[0]?.category) str += `${val.items[0]?.category}`
                                            })
                                        })
                                        .catch((error) => {
                                            console.error(error)
                                        })
                                    setAIResponse(JSON.stringify(str))
                                }}
                            >
                                Describe Quote
                            </button>
                            {/* <button onClick={() => copyURL(openSnackbar, () => setScrollPosition(parseInt(quotationId)))}>Share Link</button> */}
                        </div>
                    </>
                )}
            </div>
        )
}

export default Row
