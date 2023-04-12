/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OPTIONS from '../../../static/philosophers-data.json'
import { ALPHABETICAL, LATEST } from '../constants/constants'
import { setOptionsRedux, setSortingRedux } from '../homePageRedux/homePageRedux'
import { bringIntoAlphabeticalOrder, bringIntoOriginalOrder } from './utils'

export function useSortingHooks() {
    const dispatch = useDispatch()
    const options = useSelector((state) => state.philosophersData.options)
    const sorting = useSelector((state) => state.philosophersData.sorting)
    const setSorting = (value) => dispatch(setSortingRedux(value))

    useEffect(() => {
        const setOptions = (value) => dispatch(setOptionsRedux(value))
        let resultOptions = []

        if (sorting === LATEST) {
            resultOptions = bringIntoOriginalOrder(OPTIONS, options)
            setOptions(resultOptions)
        } else if (sorting === ALPHABETICAL) {
            resultOptions = bringIntoAlphabeticalOrder(options)
            setOptions(resultOptions)
        }
    }, [sorting])

    return { sorting, setSorting, options }
}
