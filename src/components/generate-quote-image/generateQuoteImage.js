import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ROUTES from '../../routes/routes'
import { setDarkModeClassOnHTMLTag } from '../home-page/utils/utils'
import styles from './generateQuoteImage.module.css'
import { autoAdjustFont } from './utils/fontutils'
import { exportAsImage } from './utils/utils'

const GenerateQuoteImage = (props) => {
    let {
        state: { quotationText, philosopherFullName, signature },
    } = useLocation()
    const navigate = useNavigate()
    const exportRef = useRef()
    const darkMode = useSelector((state) => state.philosophersData.darkMode)
    const currentPhilosopher = useSelector((state) => state.philosophersData.currentPhilosopher)

    useEffect(() => {
        exportAsImage(exportRef.current, `${philosopherFullName}-quote-${uuidv4()}.png`).then(() => navigate(ROUTES.homepage.route))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setDarkModeClassOnHTMLTag(darkMode)
    }, [darkMode])

    try {
        const imageName = `${currentPhilosopher}.jpg`
        return (
            <div className={`${styles.fontFredericka} `} style={{ fontSize: autoAdjustFont(quotationText) }} ref={exportRef}>
                {<img className={styles.phImage} alt={philosopherFullName} src={require('../../static/assets/images/philosophers/' + imageName)} />}
                <div className={`${styles.alignment}`}>
                    <p className={`${styles.backgroundTransparent}`}>"{quotationText}"</p>
                    <p className={`${styles.backgroundTransparent}`}>{philosopherFullName}</p>
                </div>
                <div className={`${styles.signature}`}>{signature}</div>
            </div>
        )
    } catch (error) {
        console.log(error)
        return (
            <div className={styles.fontFredericka} style={{ fontSize: autoAdjustFont(quotationText) }} ref={exportRef}>
                <div className={`${styles.alignmentOld}`}>
                    <p className={`${styles.fullWidthOld}`}>"{quotationText}"</p>
                    <p>{philosopherFullName}</p>
                </div>
                <div className={`${styles.signature}`}>{signature}</div>
            </div>
        )
    }
}

export default GenerateQuoteImage
