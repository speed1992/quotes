import React from 'react'
import { useLocation } from 'react-router-dom'

const GenerateQuoteImage = (props) => {
    let { state } = useLocation()
    return <>GenerateQuoteImage {JSON.stringify(state)}</>
}

export default GenerateQuoteImage
