import { useDispatch, useSelector } from 'react-redux'
import { isDesktop } from '../../../../../common/utils/utils'
import { setMinModeRedux } from '../../home-page/homePageRedux/homePageRedux'
import styles from './toggleMinMode.module.css'

const ToggleMinMode = () => {
    const dispatch = useDispatch()
    const { minMode } = useSelector((state) => state.philosophersData)
    return (
        !isDesktop() && (
            <button className={styles.minMode} onClick={() => dispatch(setMinModeRedux(!minMode))}>
                Toggle Min Mode
            </button>
        )
    )
}

export default ToggleMinMode
