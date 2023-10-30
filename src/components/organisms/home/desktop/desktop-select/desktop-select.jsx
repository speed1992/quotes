import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { getPhilosopherObjectIndex } from '../../../../../common/static/utils/utils'
import styles from '../../header-layout/header-layout.module.css'

const DesktopSelect = ({ onChangeHandler, onFocusHandler, options, currentPhilosopher }) => {
    return <Autocomplete className={styles.customFontForAutoComplete} disableClearable onFocus={onFocusHandler} onChange={onChangeHandler} getOptionLabel={(option) => option.fullName} value={options[getPhilosopherObjectIndex(currentPhilosopher, options)]} options={options} size="small" sx={{ width: 210 }} renderInput={(params) => <TextField {...params} label="Philosopher" />} ListboxProps={{ style: { maxHeight: '80vh' }, position: 'bottom-start' }} />
}

export default DesktopSelect
