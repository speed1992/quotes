import { changeQuotesData } from '../../components/organisms/home/quotes-list/utils/utils'

export const scrollToFirstRow = (listRef) => {
    if (listRef.current) {
        listRef.current.scrollToRow(0)
    }
}

export const scrollToMemorizedRow = (listRef, scrollPosition, currentData) => {
    if (currentData?.length > 0 && listRef.current) {
        if (scrollPosition !== undefined && scrollPosition !== 'undefined' && scrollPosition && scrollPosition > 0) {
            listRef.current.scrollToRow(scrollPosition)
        } else {
            scrollToFirstRow(listRef)
        }
    }
}

export const scrollToQuoteId = (listRef, scrollObject, currentData, currentPhilosopher) => {
    const quoteId = scrollObject[currentPhilosopher]
    if (currentData?.length > 0 && listRef.current) {
        if (quoteId !== undefined && quoteId !== 'undefined' && quoteId && quoteId > 0) {
            const index = currentData.findIndex(({ id }) => {
                return id === quoteId
            })
            if (index > -1) listRef.current.scrollToRow(index)
        } else {
            scrollToFirstRow(listRef)
        }
    }
}

export const search = ({ searchText, start, end, setCurrentData, searchFilters, markedMode, markedQuotes, setMarkedQuotes, currentData, currentPhilosopher }) => {
    return new Promise((resolve) => {
        if (currentData !== undefined) {
            let worker
            if (window.Worker) {
                worker = new Worker(new URL('../web-workers/filter-worker.js', import.meta.url))
            } else {
                alert("Your browser doesn't support web workers.")
            }

            if (typeof start === 'string' && start.trim() === '') start = 0
            worker.postMessage({ currentData, searchText, searchFilters, end, start })
            worker.onmessage = (event) => {
                const filteredQuotesFromWorker = JSON.parse(eval(`(${JSON.stringify(event.data)})`))
                worker?.terminate()
                changeQuotesData({ currentData: filteredQuotesFromWorker, setCurrentData, currentPhilosopher }, { markedMode, markedQuotes, setMarkedQuotes })
                resolve()
            }
        }
    })
}

export const isMobile = () => window.innerWidth <= 600

export const isDesktop = () => window.innerWidth >= 600
