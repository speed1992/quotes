import { lazy, Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar'
import { isUndefined } from '../../common/utils/commonUtils'
import { debounce } from '../../common/utils/debounce'
import ROUTES from '../../routes/routes'
import Audio from '../audio/audio'
import { Translate } from '../translate/translate'
import styles from './row.module.css'
import { evaluateClassNames } from './style-utils'
import { rowClickHandler } from './utils'
const MarkAsRead = lazy(() => import('../mark-as-read/mark-as-read'))

export const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef, darkMode }, style }) => {
    const quoteRef = useRef()
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode }
    const [localTranslateKey, setLocalTranslateKey] = useState(false)

    const debouncedHandler = debounce(() => setScrollPosition(index), 500)

    if (!isUndefined(currentQuote))
        return (
            <div key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <span style={{ position: 'absolute', top: '20rem' }} className="row">
                    <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                        "{quotationText}" ― {philosopherFullName}
                    </span>
                </span>
                <div style={{ position: 'absolute', top: '30rem' }} className="row">
                    {localTranslateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}
                </div>

                <div className={styles.actionItems} style={{ position: 'absolute', bottom: '34rem' }}>
                    <button>
                        <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName, signature: 'Instagram: @philosophizetruth' }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000' }}>
                            Download Image
                        </Link>
                    </button>
                    <Audio index={index} currentData={currentData} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} listRef={listRef} />
                    {markedMode && (
                        <Suspense fallback={''}>
                            <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} />
                        </Suspense>
                    )}
                    <button style={{ margin: '2px auto', display: 'table' }} onClick={() => setLocalTranslateKey(true)}>
                        Translate
                    </button>
                </div>
            </div>
        )
}
