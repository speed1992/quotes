import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentModalName } from '../../../../../common/components/modal/modalRedux'
import { uuidv4 } from '../../../../../common/utils/commonUtils'
import { setThemeClassNameOnHTMLTag } from '../../../home/home-page/utils/utils'
import { exportAsImage, shareQuote } from './utils'

export function useCreateQuoteImage(philosopherFullName, share, exportRef, darkMode) {
    const dispatch = useDispatch()
    useEffect(() => {
        setThemeClassNameOnHTMLTag(true)
    }, [])

    useEffect(() => {
        ;(async function () {
            const filename = `${philosopherFullName}-quote-${uuidv4()}.png`
            if (share !== undefined && share === true) {
                await exportAsImage(exportRef.current, filename)
                await shareQuote(exportRef.current, filename)
            } else {
                await exportAsImage(exportRef.current, filename)
            }
            if (!darkMode) setThemeClassNameOnHTMLTag(false)
            dispatch(setCurrentModalName(''))
        })()
    }, [exportRef, philosopherFullName, share])
}
