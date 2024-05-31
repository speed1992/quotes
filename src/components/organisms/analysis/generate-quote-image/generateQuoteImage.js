import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { useCreateQuoteImage } from './utils/hooks'
const QuoteWithImage = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "QuoteWithImage" */ '../quote-with-image/quote-with-image')))
const QuoteWithoutImage = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "QuoteWithoutImage" */ '../quote-without-image/quote-without-image')))

const GenerateQuoteImage = () => {
    let { quotationText, philosopherFullName, signature, share = false } = useSelector((state) => state.quoteImage)
    const exportRef = useRef()
    const currentPhilosopher = useSelector((state) => state.philosophersData.currentPhilosopher)
    const darkMode = useSelector((state) => state.philosophersData.darkMode)

    const propsToSend = { exportRef, quotationText, philosopherFullName, signature }

    useCreateQuoteImage(philosopherFullName, share, exportRef, darkMode)

    try {
        const imageName = `${currentPhilosopher}.jpg`
        require('../../../../common/static/assets/images/philosophers/' + imageName)
        return <QuoteWithImage {...propsToSend} imageName={imageName} />
    } catch (error) {
        return <QuoteWithoutImage {...propsToSend} />
    }
}

export default React.memo(GenerateQuoteImage)
