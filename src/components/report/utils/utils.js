import { v4 as uuidv4 } from 'uuid'
import { isUndefined } from '../../../common/utils/commonUtils'
import { getPhilosopherFullName } from '../../quotes-list/utils/utils'

export const createData = ({ markedQuotes, originalData, options, setData }) => {
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
