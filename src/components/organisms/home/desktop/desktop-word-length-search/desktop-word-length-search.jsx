import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../../tools/wordLengthSearch/wordLengthSearch.module.css'
import { setStartRedux } from '../../home-page/homePageRedux/homePageRedux'

const DesktopWordLengthSearch = ({ start }) => {
    const dispatch = useDispatch()
    return <TextField className={styles.smallInput} id="outlined-number" label="Words" type="number" size="small" name="start" min="1" value={start} onChange={({ target: { value } }) => dispatch(setStartRedux(value))} />
}
export default DesktopWordLengthSearch
