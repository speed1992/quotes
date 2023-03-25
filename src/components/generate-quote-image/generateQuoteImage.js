import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import QuoteWithImage from '../quote-with-image/quote-with-image'
import QuoteWithoutImage from '../quote-without-image/quote-without-image'
import { useCreateQuoteImage } from './utils/hooks'

const GenerateQuoteImage = () => {
    let {
        state: { quotationText, philosopherFullName, signature, share = false },
    } = useLocation()
    const exportRef = useRef()
    const currentPhilosopher = useSelector((state) => state.philosophersData.currentPhilosopher)

    const propsToSend = { exportRef, quotationText, philosopherFullName, signature }

    useCreateQuoteImage(philosopherFullName, share, exportRef)

    try {
        const imageName = `${currentPhilosopher}.jpg`
        require('../../static/assets/images/philosophers/' + imageName)
        return <QuoteWithImage {...propsToSend} imageName={imageName} />
    } catch (error) {
        return <QuoteWithoutImage {...propsToSend} />
    }
}

export default GenerateQuoteImage
