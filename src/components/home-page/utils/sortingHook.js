/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OPTIONS from '../../../static/philosophers-data.json'
import { ALPHABETICAL, LATEST } from '../constants/constants'
import { setOptionsRedux, setSortingRedux } from '../homePageRedux/homePageRedux'

export function useSortingHooks() {
    const dispatch = useDispatch()
    const sorting = useSelector((state) => state.philosophersData.sorting)
    const setSorting = (value) => dispatch(setSortingRedux(value))
    let resultOptions = JSON.parse(JSON.stringify(OPTIONS))

    useEffect(() => {
        const setOptions = (value) => dispatch(setOptionsRedux(value))

        if (sorting === LATEST) {
            setOptions(resultOptions.reverse())
        } else if (sorting === ALPHABETICAL) {
            resultOptions.sort((a, b) => a.fullName.localeCompare(b.fullName))
            setOptions(resultOptions)
        }
    }, [sorting])

    return { sorting, setSorting, resultOptions }
}
