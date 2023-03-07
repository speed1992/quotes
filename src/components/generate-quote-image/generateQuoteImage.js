import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './generateQuoteImage.module.css'
import exportAsImage from './utils/utils'

const GenerateQuoteImage = (props) => {
    let {
        state: { quotationText, philosopherFullName },
    } = useLocation()
    const exportRef = useRef()

    useEffect(() => {
        exportAsImage(exportRef.current, 'test')
    }, [])

    return (
        <>
            <div className={`${styles.fontFredericka} `} ref={exportRef}>
                <div className={`${styles.alignment}`}>
                    <p className={`${styles.fullWidth}`}>{quotationText}</p>
                    <p>{philosopherFullName}</p>
                </div>
            </div>
        </>
    )
}

export default GenerateQuoteImage
