import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { setIsFetchingPhilosopherRedux } from '../home-page/homePageRedux/homePageRedux'
import { lazyInit } from './utils/utils'
const QuotesList = React.lazy(() => retryTenTimes(() => import(/* webpackChunkName: "QuotesList" */ '../quotes-list/quotes-list')))

export function LazyLoadQuoteList(props) {
    const dispatch = useDispatch()
    const setIsFetching = useCallback((value) => dispatch(setIsFetchingPhilosopherRedux(value)), [dispatch])
    const { currentPhilosopher, setCurrentData, options, setOptions, isFetching } = props

    useEffect(() => {
        dispatch(setIsFetching(true))
        lazyInit(currentPhilosopher, options, setOptions, setCurrentData, setIsFetching)
    }, [currentPhilosopher])

    return !isFetching && <QuotesList {...props} />
}
