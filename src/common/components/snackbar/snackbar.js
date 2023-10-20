import { useSelector } from 'react-redux'
import styles from './snackbar.module.css'

const SnackBar = () => {
    const message = useSelector((state) => state.snackbar.message)
    return message && <div className={styles.snackbar}>{message}</div>
}

export default SnackBar
