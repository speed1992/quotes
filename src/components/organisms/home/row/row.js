import React, { Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar'
import ROUTES from '../../../../common/routes/routes'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { isUndefined } from '../../../../common/utils/commonUtils'
import { debounce } from '../../../../common/utils/debounce'
import styles from './styles/row.module.css'
import { evaluateClassNames } from './utils/style-utils'
import { rowClickHandler } from './utils/utils'
const MarkAsRead = React.lazy(() => retryTenTimes(() => import('../../tools/mark-as-read/mark-as-read')))
const PushToSocialMedia = React.lazy(() => retryTenTimes(() => import('../../tools/push-to-social-media/push-to-social-media')))
const Translate = React.lazy(() => retryTenTimes(() => import('../../tools/translate/translate')))
const Audio = React.lazy(() => retryTenTimes(() => import('../../tools/audio/audio')))

const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef, darkMode, scheduledPosts, setScheduledQuotes }, style }) => {
    const quoteRef = useRef()
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode }
    const [localTranslateKey, setLocalTranslateKey] = useState(false)
    const debouncedHandler = debounce(() => setScrollPosition(index), 500)

    if (!isUndefined(currentQuote))
        return (
            <div key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <span style={{ position: 'absolute', top: '10rem' }} className="row">
                    <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                        {`${index + 1}. "${quotationText}" ― ${philosopherFullName}`}
                    </span>
                </span>
                <div style={{ position: 'absolute', top: '26rem' }} className="row">
                    {localTranslateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}
                </div>

                <div className={styles.actionItems} style={{ position: 'absolute', bottom: '5rem' }}>
                    <button>
                        <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth' }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}>
                            Download Image
                        </Link>
                    </button>
                    <Audio index={index} currentData={currentData} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} listRef={listRef} />
                    {markedMode && (
                        <Suspense fallback={''}>
                            <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} setLocalTranslateKey={setLocalTranslateKey} />
                        </Suspense>
                    )}
                    <button onClick={() => setLocalTranslateKey(true)}>Translate</button>
                    <button>
                        <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth', share: true }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}>
                            Share
                        </Link>
                    </button>
                    {/* <PushToSocialMedia index={quotationId} currentPhilosopher={currentPhilosopher} scheduledPosts={scheduledPosts} setScheduledQuotes={setScheduledQuotes} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} setLocalTranslateKey={setLocalTranslateKey} /> */}
                </div>
            </div>
        )
}

export default Row
