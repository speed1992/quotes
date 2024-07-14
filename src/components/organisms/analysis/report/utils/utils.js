import { getPhilosopherObjectIndex, getPhilosopherQuotes } from '../../../../../common/static/utils/utils'
import { isUndefined, uuidv4 } from '../../../../../common/utils/commonUtils'
import { getPhilosopherFullName } from '../../../home/quotes-list/utils/utils'

export const createData = ({ markedQuotes, options, setData }) => {
    const data = []
    let sum = 0
    for (const key in markedQuotes) {
        if (markedQuotes.hasOwnProperty(key) && getPhilosopherObjectIndex(key, options) !== -1) {
            let readCount = 0
            if (!isUndefined(markedQuotes[key])) {
                readCount = markedQuotes[key].length
                sum += readCount
            }
            const originalData = getPhilosopherQuotes({ philosopher: key, options })
            const totalQuoteCount = originalData?.length
            const obj = { id: uuidv4(), philosopher: getPhilosopherFullName({ currentPhilosopher: key, options }), readCount, totalCount: totalQuoteCount || '——', percentageCompleted: totalQuoteCount ? `${((readCount / totalQuoteCount) * 100).toFixed(2)}%` : '——' }
            data.push(obj)
        }
    }
    const obj = { philosopher: 'Total Read', readCount: sum, id: uuidv4() }
    data.push(obj)
    setData(data)
}
