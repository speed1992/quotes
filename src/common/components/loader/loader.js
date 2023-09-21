import React from 'react'
import { useSelector } from 'react-redux'
import styles from './loader.module.css'

function Loader() {
    const darkMode = useSelector((state) => state.philosophersData.darkMode)
    return (
        <div className={styles.loading}>
            <div className={styles.uilRingCss}>
                <div className={darkMode ? styles.darkTheme : styles.lightTheme}></div>
            </div>
            <div className={styles.loadingTextPrimary}>Please wait...</div>
            <div className={styles.loadingTextSecondary}>Loading...</div>
        </div>
    )
}

export default Loader
