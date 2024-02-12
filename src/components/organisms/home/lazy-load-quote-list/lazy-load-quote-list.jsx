import React, { useEffect } from 'react'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
import { lazyInit } from './utils/utils'
const QuotesList = React.lazy(() => retryTenTimes(() => import('../quotes-list/quotes-list')))

export function LazyLoadQuoteList(props) {
    const { currentPhilosopher, setCurrentData, options, setOptions, setIsFetching, isFetching } = props

    useEffect(() => {
        setIsFetching(true)
        lazyInit(currentPhilosopher, options, setOptions, setCurrentData, setIsFetching)
    }, [currentPhilosopher])

    return !isFetching && <QuotesList {...props} />
}
