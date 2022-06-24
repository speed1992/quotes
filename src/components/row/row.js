import { debounce } from 'lodash';
import { lazy, Suspense, useRef } from "react";
import { useSnackbar } from 'react-simple-snackbar';
import { isUndefined } from '../../common/utils/commonUtils';
import { currentData } from "../../common/utils/staticDataUtils";
import Audio from "../audio/audio";
import { GenerateQuoteImage } from '../generate-quote-image/generateQuoteImage';
import { Translate } from '../translate/translate';
import { evaluateClassNames } from './style-utils';
import { rememberScrollPosition, rowClickHandler } from './utils';

const MarkAsRead = lazy(() => import('../mark-as-read/mark-as-read'))

export const Row = ({ data: { searchText, start, end, triggerChange, setTriggerChange, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode }, index, style }) => {
    const quoteRef = useRef();
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentData[index];
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => rememberScrollPosition(searchText, start, end, index), 100)
    if (!isUndefined(currentData[index]))
        return (
            <div key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler} >
                <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                    "{quotationText}"

                    ― {philosopherFullName}
                </span>

                {translateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}

                <div style={{ position: "absolute", top: "50rem" }}>
                    <GenerateQuoteImage quoteRef={quoteRef} quotationText={quotationText} philosopherFullName={philosopherFullName} />
                    <Audio index={index} setTriggerChange={setTriggerChange} />
                    {markedMode &&
                        (<Suspense fallback={""}>
                            <MarkAsRead index={quotationId} setTriggerChange={setTriggerChange} />
                        </Suspense>)
                    }
                </div >
            </div>
        )
};