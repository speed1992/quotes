import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../../../../common/routes/routes'
import { uuidv4 } from '../../../../../common/utils/commonUtils'
import { setDarkModeClassOnHTMLTag } from '../../../home/home-page/utils/utils'
import { exportAsImage, shareQuote } from './utils'

export function useCreateQuoteImage(philosopherFullName, share, exportRef) {
    const navigate = useNavigate()

    const darkMode = useSelector((state) => state.philosophersData.darkMode)

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    useEffect(() => {
        ;(async function () {
            const filename = `${philosopherFullName}-quote-${uuidv4()}.png`
            if (share !== undefined && share === true) {
                await exportAsImage(exportRef.current, filename)
                await shareQuote(exportRef.current, filename)
            } else {
                await exportAsImage(exportRef.current, filename)
            }
            navigate(ROUTES.homepage.route)
        })()
    }, [exportRef, navigate, philosopherFullName, share])
}
