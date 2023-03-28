import { isUndefined, uuidv4 } from '../../../common/utils/commonUtils'
import { getPhilosopherFullName } from '../../quotes-list/utils/utils'

export const createData = ({ markedQuotes, options, setData }) => {
    const data = []
    for (const key in markedQuotes) {
        if (markedQuotes.hasOwnProperty(key)) {
            const readCount = isUndefined(markedQuotes[key]) ? 0 : markedQuotes[key].length
            const obj = { philosopher: getPhilosopherFullName({ currentPhilosopher: key, options }), readCount: readCount, id: uuidv4() }
            data.push(obj)
        }
    }
    setData(data)
}
