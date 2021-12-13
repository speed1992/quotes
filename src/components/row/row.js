import { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import { currentData } from "../../utils/staticDataUtils";
import { translateFeatureKey } from '../../utils/urlUtils';
import { Translate } from '../translate/translate';
import { devModeSignature, rowClickHandler } from './utils';

export const Row = ({ data: { searchText, start, end, triggerChange, philosopherFullName }, index, style }) => {
    const [openSnackbar] = useSnackbar()
    const updatedIndex = index + 1;
    const quotation = currentData[index];
    const quotationText = `${updatedIndex}. ${quotation}`;
    const [translationOutput, setTranslationOutput] = useState("")

    return (
        currentData[index] !== undefined ? (
            <div key={index} className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
                {quotationText}
                {translateFeatureKey() ? (<>
                    <div key={index}>
                        <Translate index={index} translatedOutput={translationOutput} setTranslatedOutput={setTranslationOutput} inputText={currentData[index]} />
                        <button onClick={rowClickHandler.bind(this, openSnackbar, { searchText, start, end, quote: translationOutput, philosopherFullName, index })}>
                            Copy-hi!{devModeSignature()}
                        </button>
                    </div>
                </>) : null}
                <button onClick={rowClickHandler.bind(this, openSnackbar, { searchText, start, end, quote: currentData[index], philosopherFullName, index })}>
                    Copy-en!{devModeSignature()}
                </button>
            </div >
        ) : null
    )
};