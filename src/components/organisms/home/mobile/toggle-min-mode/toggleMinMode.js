import { isDesktop } from '../../../../../common/utils/utils'
import styles from './toggleMinMode.module.css'

const ToggleMinMode = ({ minMode, setMinMode }) =>
    !isDesktop() && (
        <button className={styles.minMode} onClick={() => setMinMode(!minMode)}>
            Toggle Min Mode
        </button>
    )

export default ToggleMinMode
