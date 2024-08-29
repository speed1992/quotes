import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSnackbar from '../../../../common/components/snackbar/useSnackbar'
import { setSearchFiltersRedux } from '../../home/home-page/homePageRedux/homePageRedux'
import styles from './exclusions-inclusions.module.css'

const ExclusionsInclusions = () => {
    const dispatch = useDispatch()
    const [openSnackbar] = useSnackbar()
    const searchFilters = useSelector((state) => state?.philosophersData?.searchFilters)
    const [filters, setFilters] = useState(searchFilters)
    return (
        <div className={styles?.modal}>
            <h5>Exclusions</h5>
            <textarea rows="10" onChange={(e) => setFilters({ ...filters, exclusions: e?.target?.value?.toLowerCase() })} value={filters?.exclusions} />
            <h5>Inclusions</h5>
            <textarea rows="10" onChange={(e) => setFilters({ ...filters, inclusions: e?.target?.value?.toLowerCase() })} value={filters?.inclusions} />
            <div>
                <button
                    onClick={() => {
                        dispatch(setSearchFiltersRedux(filters))
                        openSnackbar('Exclusions/Inclusions Updated!', 4000)
                    }}
                >
                    Add
                </button>
                <button
                    className={styles?.clearBtn}
                    onClick={() => {
                        const clearedFilters = { inclusions: '', exclusions: '' }
                        setFilters(clearedFilters)
                        dispatch(setSearchFiltersRedux(clearedFilters))
                        openSnackbar('Exclusions/Inclusions Updated!', 4000)
                    }}
                >
                    Clear
                </button>
            </div>
        </div>
    )
}

export default ExclusionsInclusions
