import { useDispatch } from 'react-redux'
import { setCurrentModalName } from '../../../../common/components/modal/modalRedux'
import { setQuoteImageData } from '../../analysis/generate-quote-image/generateQuoteImageRedux'
import { rowClickHandler } from '../../home/row/utils/utils'
import { useTranslation } from './custom-hooks/custom-hooks'

const Translate = ({ inputText, from = 'en', to = 'hi', openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode, setIsLocalFetching }) => {
    const translationOutput = useTranslation({ inputText, from, to, setIsLocalFetching })
    const philosopherFullnameIn_SelectedLanguage = philosopherFullName_i10n[to]
    const dispatch = useDispatch()

    return translationOutput !== '' && translationOutput !== undefined && translationOutput ? (
        <>
            <div key={index} onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, index })}>
                {translationOutput} ― {philosopherFullnameIn_SelectedLanguage}
            </div>
            <div>
                <button
                    onClick={() => {
                        dispatch(setQuoteImageData({ quotationText: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, signature: 'इंस्टाग्राम: @jaaginsaan' }))
                        dispatch(setCurrentModalName('Image'))
                    }}
                    style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000', marginTop: '10px' }}
                >
                    डाउन्लोड
                </button>
            </div>
        </>
    ) : null
}

export default Translate
