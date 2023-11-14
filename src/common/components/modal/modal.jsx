import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { isDesktop } from '../../utils/utils'
import styles from './modal.module.css'
import { setCurrentModalName } from './modalRedux'

const Modal = ({ children, title, darkMode }) => {
    const dispatch = useDispatch()

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
