import { useSelector } from 'react-redux'
import { isDesktop } from '../../../../../common/utils/utils'
import styles from './toggleMinMode.module.css'

const ToggleMinMode = () => {
    const { minMode, setMinMode } = useSelector((state) => state.philosophersData)
    return (
        !isDesktop() && (
            <button className={styles.minMode} onClick={() => setMinMode(!minMode)}>
                Toggle Min Mode
            </button>
        )
    )
}

export default ToggleMinMode
