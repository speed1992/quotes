import { debounce } from 'lodash'
import { lazy, Suspense, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar'
import { isUndefined } from '../../common/utils/commonUtils'
import ROUTES from '../../routes/routes'
import Audio from '../audio/audio'
import { Translate } from '../translate/translate'
import { evaluateClassNames } from './style-utils'
import { rememberScrollPosition, rowClickHandler } from './utils'

const MarkAsRead = lazy(() => import('../mark-as-read/mark-as-read'))

export const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode, currentQuote, currentPhilosopher, markedQuotes, setMarkedQuotes, currentData, setCurrentData, index }, style }) => {
    const quoteRef = useRef()
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => rememberScrollPosition(searchText, start, end, index), 100)
    if (!isUndefined(currentQuote))
        return (
            <div id="row" key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                    "{quotationText}" ― {philosopherFullName}
                </span>

                {translateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}

                <div style={{ position: 'absolute', top: '50rem' }}>
                    <button>
                        <Link to={ROUTES.image.route} state={{ quotationText, philosopherFullName }}>
                            Download Image
                        </Link>
                    </button>
                    <Audio index={index} currentData={currentData} />
                    {markedMode && (
                        <Suspense fallback={''}>
                            <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher} markedQuotes={markedQuotes} setMarkedQuotes={setMarkedQuotes} currentData={currentData} setCurrentData={setCurrentData} />
                        </Suspense>
                    )}
                </div>
            </div>
        )
}
