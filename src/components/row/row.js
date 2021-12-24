import { debounce } from 'lodash';
import { useSnackbar } from 'react-simple-snackbar';
import { currentData } from "../../utils/staticDataUtils";
import { Translate } from '../translate/translate';
import { rememberScrollPosition, rowClickHandler } from './utils';

export const Row = ({ data: { searchText, start, end, triggerChange, philosopherFullName, philosopherFullName_i10n }, index, style }) => {
    const [openSnackbar] = useSnackbar()
    const quotationText = `${index + 1}. ${currentData[index]}`;
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => rememberScrollPosition(searchText, start, end, index), 100)

    return (
        currentData[index] !== undefined &&
        (<div onMouseMove={debouncedHandler} onTouchStart={debouncedHandler} key={index} className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            <span onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: currentData[index], philosopherFullName, index })}>
                {quotationText}
            </span>
            <Translate inputText={currentData[index]} {...propsToSend} />
        </div >)
    )
};