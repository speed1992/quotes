import { worker } from '../web-workers/worker'

export const scrollToFirstRow = (listRef) => {
    if (listRef.current) {
        listRef.current.scrollToRow(0)
    }
}

export const scrollToMemorizedRow = (listRef, scrollPosition, currentData) => {
    debugger
    if (currentData.length > 0 && listRef.current) {
        if (scrollPosition !== undefined && scrollPosition !== 'undefined' && scrollPosition && scrollPosition > 0) {
            listRef.current.scrollToRow(scrollPosition)
        } else {
            scrollToFirstRow(listRef)
        }
    }
}

export const search = ({ searchText, currentData, setCurrentData }) => {
    return new Promise((resolve) => {
        if (currentData !== undefined) {
            worker.postMessage({ currentData, searchText, filterName: 'searchTermFilter' })
            worker.onmessage = (event) => {
                const filteredQuotesFromWorker = JSON.parse(eval(`(${JSON.stringify(event.data)})`))
                resolve(filteredQuotesFromWorker)
            }
        }
    })
}

export const isMobile = () => window.innerWidth <= 600

export const isDesktop = () => window.innerWidth >= 600
