import { isDesktop } from '../../../../../common/utils/utils'
import { useHomePageHooks } from '../../home-page/utils/hooks'
import styles from './toggleMinMode.module.css'

const ToggleMinMode = () => {
    const { minMode, setMinMode } = useHomePageHooks()
    return (
        !isDesktop() && (
            <button className={styles.minMode} onClick={() => setMinMode(!minMode)}>
                Toggle Min Mode
            </button>
        )
    )
}

export default ToggleMinMode
