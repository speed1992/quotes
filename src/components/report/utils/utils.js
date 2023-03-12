import { v4 as uuidv4 } from 'uuid'
import { isUndefined } from '../../../common/utils/commonUtils'

export const createData = ({ markedQuotes, originalData, options, setData }) => {
    const data = []
    for (const key in markedQuotes) {
        if (markedQuotes.hasOwnProperty(key)) {
            const readCount = isUndefined(markedQuotes[key]) ? 0 : markedQuotes[key].length
            const obj = { philosopher: key, readCount: readCount, id: uuidv4() }
            data.push(obj)
        }
    }
    setData(data)
}
