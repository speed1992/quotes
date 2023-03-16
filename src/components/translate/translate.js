import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routes'
import { rowClickHandler } from '../row/utils'
import { useTranslation } from './custom-hooks/custom-hooks'

export const Translate = ({ inputText, from = 'en', to = 'hi', openSnackbar, searchText, start, end, philosopherFullName, index, philosopherFullName_i10n, darkMode }) => {
    const translationOutput = useTranslation({ inputText, from, to })
    const philosopherFullnameIn_SelectedLanguage = philosopherFullName_i10n[to]
    console.log('philosopherFullnameIn_SelectedLanguage', philosopherFullnameIn_SelectedLanguage)

    return translationOutput !== '' && translationOutput !== undefined && translationOutput ? (
        <>
            <div key={index} onClick={rowClickHandler.bind(this, { openSnackbar, searchText, start, end, quote: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, index })}>
                {translationOutput} ― {philosopherFullnameIn_SelectedLanguage}
            </div>
            <div>
                <button style={{ marginTop: '10px' }}>
                    <Link to={ROUTES.image.route} state={{ quotationText: translationOutput, philosopherFullName: philosopherFullnameIn_SelectedLanguage, signature: '@jaaginsaan' }} style={{ textDecoration: 'none', color: darkMode ? '#fff' : '#000', marginTop: '10px' }}>
                        Download Hindi Image
                    </Link>
                </button>
            </div>
        </>
    ) : null
}
