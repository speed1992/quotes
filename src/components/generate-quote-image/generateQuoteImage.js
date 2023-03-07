/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './generateQuoteImage.module.css'
import exportAsImage from './utils/utils'

const GenerateQuoteImage = (props) => {
    let {
        state: { quotationText, philosopherFullName },
    } = useLocation()
    const navigate = useNavigate()

    const exportRef = useRef()

    useEffect(() => {
        exportAsImage(exportRef.current, 'test')
        // .then(() => navigate(ROUTES.homepage.route))
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
