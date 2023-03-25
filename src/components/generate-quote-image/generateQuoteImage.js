import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ROUTES from '../../routes/routes'
import { setDarkModeClassOnHTMLTag } from '../home-page/utils/utils'
import QuoteWithImage from '../quote-with-image/quote-with-image'
import QuoteWithoutImage from '../quote-without-image/quote-without-image'
import { exportAsImage, shareQuote } from './utils/utils'

const GenerateQuoteImage = () => {
    let {
        state: { quotationText, philosopherFullName, signature, share = false },
    } = useLocation()
    const navigate = useNavigate()
    const exportRef = useRef()
    const darkMode = useSelector((state) => state.philosophersData.darkMode)
    const currentPhilosopher = useSelector((state) => state.philosophersData.currentPhilosopher)

    const propsToSend = { exportRef, quotationText, philosopherFullName, signature }

    useEffect(() => {
        ;(async function () {
            const filename = `${philosopherFullName}-quote-${uuidv4()}.png`
            if (share !== undefined) {
                await shareQuote(exportRef.current, filename)
            } else {
                await exportAsImage(exportRef.current, filename)
            }
            navigate(ROUTES.homepage.route)
        })()
    }, [navigate, philosopherFullName, share])

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    try {
        const imageName = `${currentPhilosopher}.jpg`
        require('../../static/assets/images/philosophers/' + imageName)
        return <QuoteWithImage {...propsToSend} imageName={imageName} />
    } catch (error) {
        return <QuoteWithoutImage {...propsToSend} />
    }
}

export default GenerateQuoteImage
