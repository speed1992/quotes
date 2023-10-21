import { TextField } from '@mui/material'
import React from 'react'
import styles from '../../../tools/wordLengthSearch/wordLengthSearch.module.css'

const DesktopWordLengthSearch = ({ start, setStart, end, setEnd }) => {
    return <TextField className={styles.smallInput} id="outlined-number" label="Words" type="number" size="small" name="start" min="1" value={start} onChange={({ target: { value } }) => setStart(value)} />
}
export default DesktopWordLengthSearch
