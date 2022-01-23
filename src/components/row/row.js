import { debounce } from 'lodash';
import { useSnackbar } from 'react-simple-snackbar';
import { isUndefined } from '../../common/utils/commonUtils';
import { currentData } from "../../common/utils/staticDataUtils";
import { audioFeatureKey } from '../../common/utils/urlUtils';
import soundLogo from "../../static/assets/images/sound.png";
import { Translate } from '../translate/translate';
import { play } from './speechUtils';
import { evaluateClassNames } from './style-utils';
import { rememberScrollPosition, rowClickHandler } from './utils';

export const Row = ({ data: { searchText, start, end, triggerChange, philosopherFullName, philosopherFullName_i10n, translateKey }, index, style }) => {
    const [openSnackbar] = useSnackbar()
    const quotationText = `${index + 1}. ${currentData[index]}`;
    const propsToSend = { openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n }

    const debouncedHandler = debounce(() => rememberScrollPosition(searchText, start, end, index), 100)

    if (isUndefined(currentData[index]))
        return (
            <div onMouseMove={debouncedHandler} onTouchStart={debouncedHandler} key={index} className={evaluateClassNames(index)} style={style}>
                <span onClick={rowClickHandler.bind(this, { quote: currentData[index], ...propsToSend })}>
                    {quotationText}
                </span>
                {translateKey ? <Translate inputText={currentData[index]} {...propsToSend} /> : null}
                {audioFeatureKey() ? <span><img onClick={play.bind(this, index)} className="sound-icon" src={soundLogo} alt="Play quotes" /></span> : null}
            </div >
        )
};