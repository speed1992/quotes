import React from 'react'
import styles from './loader.module.css'

export function Loader() {
    return (
        <div className={styles.loading}>
            <div className={styles.uilRingCss}>
                <div></div>
                {/* Please wait... */}
            </div>
        </div>
    )
}
