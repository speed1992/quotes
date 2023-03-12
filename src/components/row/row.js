import { lazy, Suspense, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar'
import { isUndefined } from '../../common/utils/commonUtils'
import { debounce } from '../../common/utils/debounce'
import ROUTES from '../../routes/routes'
import Audio from '../audio/audio'
import { Translate } from '../translate/translate'
import { evaluateClassNames } from './style-utils'
import { rowClickHandler } from './utils'

const MarkAsRead = lazy(() => import('../mark-as-read/mark-as-read'))

export const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index, scrollPosition, setScrollPosition, listRef }, style }) => {
    const quoteRef = useRef()
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => setScrollPosition(index), 300)

    if (!isUndefined(currentQuote))
        return (
            <div key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <span className="row">
                    <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                        "{quotationText}" ― {philosopherFullName}
                    </span>
                    {translateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}
                </span>

                <div style={{ position: 'absolute', bottom: '9rem' }}>
                    <button>
                        <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName }} style={{ textDecoration: 'none', color: '#000' }}>
                            Download Image
                        </Link>
                    </button>
                    <Audio index={index} currentData={currentData} scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} listRef={listRef} />
                    {markedMode && (
                        <Suspense fallback={''}>
                            <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} />
                        </Suspense>
                    )}
                </div>
            </div>
        )
}
