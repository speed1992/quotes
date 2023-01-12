import { debounce } from 'lodash'
import { lazy, Suspense, useRef } from 'react'
import { useSnackbar } from 'react-simple-snackbar'
import { isUndefined } from '../../common/utils/commonUtils'
import Audio from '../audio/audio'
import { GenerateQuoteImage } from '../generate-quote-image/generateQuoteImage'
import { Translate } from '../translate/translate'
import { evaluateClassNames } from './style-utils'
import { rememberScrollPosition, rowClickHandler } from './utils'

const MarkAsRead = lazy(() => import('../mark-as-read/mark-as-read'))

export const Row = ({ data: { searchText, start, end, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode, currentQuote, currentPhilosopher }, index, style }) => {
    const quoteRef = useRef()
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentQuote
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => rememberScrollPosition(searchText, start, end, index), 100)
    if (!isUndefined(currentQuote))
        return (
            <div key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler}>
                <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                    "{quotationText}" ― {philosopherFullName}
                </span>

                {translateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}

                <div style={{ position: 'absolute', top: '50rem' }}>
                    <GenerateQuoteImage quoteRef={quoteRef} quotationText={quotationText} philosopherFullName={philosopherFullName} />
                    <Audio index={index} />
                    {markedMode && (
                        <Suspense fallback={''}>
                            <MarkAsRead index={quotationId} currentPhilosopher={currentPhilosopher}/>
                        </Suspense>
                    )}
                </div>
            </div>
        )
}
