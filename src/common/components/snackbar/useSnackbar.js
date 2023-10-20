// dispatch(setSnackabrMessage('Are you an idiot?'))

import { useDispatch } from 'react-redux'
import { setSnackabrMessage } from './snackbarRedux'

const useSnackbar = () => {
    const dispatch = useDispatch()
    const openSnackbar = (text, timeout = 1400) => {
        dispatch(setSnackabrMessage(text))
        setTimeout(() => dispatch(setSnackabrMessage('')), timeout)
    }
    return [openSnackbar]
}

export default useSnackbar
