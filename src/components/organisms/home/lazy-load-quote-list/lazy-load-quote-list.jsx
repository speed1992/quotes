import React, { useEffect } from 'react'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
const QuotesList = React.lazy(() => retryTenTimes(() => import('../quotes-list/quotes-list')))

export function LazyLoadQuoteList(props) {
    const { currentPhilosopher, setCurrentData, options, setOptions, setIsFetching, isFetching } = props

    async function lazyInit() {
        try {
            if (currentPhilosopher !== undefined) {
                const currentPhilosopherQuotes = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
                if (!currentPhilosopherQuotes) {
                    await lazyLoadAsset(currentPhilosopher, { options, setOptions }, [setCurrentData])
                }
            }

            setIsFetching(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        setIsFetching(true)
        lazyInit()
    }, [currentPhilosopher])

    return !isFetching && <QuotesList {...props} />
}
