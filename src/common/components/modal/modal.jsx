import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isDesktop } from '../../utils/utils'
import styles from './modal.module.css'
import { setCurrentModalName } from './modalRedux'

const Modal = ({ children, title }) => {
    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state?.philosophersData?.darkMode)

    return (
        <div className={`${styles.modalContainer} ${darkMode ? styles.darkMode : styles.lightMode}`}>
            <div className={styles.titleBar}>
                <span className={styles.title}>{title}</span>
                <button className={`${styles.close} ${isDesktop() ? styles.desktopCloseBtn : ''}`} onClick={useCallback(() => dispatch(setCurrentModalName(''), []))}>
                    X
                </button>
            </div>
            {children}
        </div>
    )
}

export default Modal
