import React from 'react'
import styles from './small-loader.module.css'

const SmallLoader = ({ darkMode }) => <span className={`${styles.loader} ${darkMode ? styles.darkTheme : ''}`}> </span>

export default React.memo(SmallLoader)
