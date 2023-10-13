import React, { useEffect } from 'react'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../../../common/static/utils/utils'
import { retryTenTimes } from '../../../../common/utils/apiUtils'
const QuotesList = React.lazy(() => retryTenTimes(() => import('../quotes-list/quotes-list')))

export function LazyLoadQuoteList(props) {
    const { currentPhilosopher, setCurrentData, options, setOptions, setIsFetching } = props

    async function lazyInit() {
        try {
            if (currentPhilosopher !== undefined) {
                const currentPhilosopherQuotes = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
                if (!currentPhilosopherQuotes) {
                    setIsFetching(true)
                    await lazyLoadAsset(currentPhilosopher, { options, setOptions }, [setCurrentData])
                }
            }

            setIsFetching(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        lazyInit()
    }, [currentPhilosopher])

    return <QuotesList {...props} />
}
