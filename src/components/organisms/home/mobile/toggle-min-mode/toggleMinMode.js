import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isDesktop } from '../../../../../common/utils/utils'
import { setMinModeRedux } from '../../home-page/homePageRedux/homePageRedux'

const ToggleMinMode = () => {
    const dispatch = useDispatch()
    const { minMode } = useSelector((state) => state.philosophersData)
    const style = useMemo(() => ({ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2 }), [])
    return (
        !isDesktop() && (
            <button style={style} onClick={() => dispatch(setMinModeRedux(!minMode))}>
                Toggle Min Mode
            </button>
        )
    )
}

export default ToggleMinMode
