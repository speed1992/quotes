import React from 'react'
import styles from './small-loader.module.css'

const SmallLoader = ({ darkMode }) => {
    console.log(darkMode)
    return <span className={`${styles.loader} ${darkMode ? styles.darkTheme : ''}`}> </span>
}

export default SmallLoader
