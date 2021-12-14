import { useSnackbar } from 'react-simple-snackbar';
import { currentData } from "../../utils/staticDataUtils";
import { Translate } from '../translate/translate';
import { devModeSignature, rowClickHandler } from './utils';

export const Row = ({ data: { searchText, start, end, triggerChange, philosopherFullName, philosopherFullName_i10n }, index, style }) => {
    const [openSnackbar] = useSnackbar()
    const quotationText = `${index + 1}. ${currentData[index]}`;
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    return (
        currentData[index] !== undefined ? (
            <div key={index} className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
                <span>{quotationText}
                    <button onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: currentData[index], philosopherFullName, index })}>
                        Copy!{devModeSignature()}
                    </button>
                </span>
                <Translate inputText={currentData[index]} {...propsToSend} />
            </div >
        ) : null
    )
};