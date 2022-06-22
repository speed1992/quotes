import { debounce } from 'lodash';
import { lazy, Suspense, useRef } from "react";
import { useSnackbar } from 'react-simple-snackbar';
import { isUndefined } from '../../common/utils/commonUtils';
import { currentData } from "../../common/utils/staticDataUtils";
import { audioFeatureKey } from '../../common/utils/urlUtils';
import { GenerateQuoteImage } from '../generate-quote-image/generateQuoteImage';
import { MarkAsRead } from '../mark-as-read/mark-as-read';
import { Translate } from '../translate/translate';
import { evaluateClassNames } from './style-utils';
import { rememberScrollPosition, rowClickHandler } from './utils';
const Audio = lazy(() => import('../audio/audio'));

export const Row = ({ data: { searchText, start, end, triggerChange, setTriggerChange, philosopherFullName, philosopherFullName_i10n, translateKey, markedMode }, index, style }) => {
    const quoteRef = useRef();
    const [openSnackbar] = useSnackbar()
    const { quote: quotationText, id: quotationId } = currentData[index];
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => rememberScrollPosition(searchText, start, end, index), 100)

    if (!isUndefined(currentData[index]))
        return (
            <div key={index} className={evaluateClassNames(index)} style={style} onMouseMove={debouncedHandler} onTouchStart={debouncedHandler} >
                {/* <span>{currentData[index]["id"]}.</span> */}
                <span ref={quoteRef} onClick={rowClickHandler.bind(this, { quote: quotationText, ...propsToSend })}>
                    "{quotationText}"

                    ― {philosopherFullName}
                </span>

                {translateKey ? <Translate inputText={quotationText} {...propsToSend} /> : null}
                {audioFeatureKey() && (<Suspense fallback={""}><Audio index={index} /></Suspense>)}

                <div>
                    <GenerateQuoteImage quoteRef={quoteRef} quotationText={quotationText} philosopherFullName={philosopherFullName} />

                    {markedMode &&
                        <MarkAsRead index={quotationId} setTriggerChange={setTriggerChange} />}
                </div >
            </div>
        )
};