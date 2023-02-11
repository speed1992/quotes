import PHILOSOPHERS_DATA from '../../static/philosophers-data'
import { getPhilosopherObjectIndex } from '../../static/utils/utils'
export let currentPhilosopher

export let currentData = []

export const changeData = (newData, setCurrentData) => {
    let currentData = JSON.parse(JSON.stringify(newData))
    setCurrentData(currentData)
}

export const resetData = () => {
    const index = getPhilosopherObjectIndex(currentPhilosopher)
    currentData = JSON.parse(JSON.stringify(PHILOSOPHERS_DATA[index]['quotes']))
}

export const removeReadData = ({ index, currentPhilosopher, markedMode, markedQuotes, setMarkedQuotes, currentData, setCurrentData }) => {
        let readQuotesArray = [];

        // const READ_ARRAY_LOCALSTORAGE_KEY = `${currentPhilosopher}-MARKED_AS_READ`

        // readQuotesArray = getStorageValue(READ_ARRAY_LOCALSTORAGE_KEY, [])
        if(markedQuotes[currentPhilosopher] !== undefined){
            readQuotesArray = [...markedQuotes[currentPhilosopher]];
        }
            readQuotesArray.push(index);
            const newData = currentData.filter(({ id }, _) => readQuotesArray.indexOf(id) === -1)
            setCurrentData(JSON.parse(JSON.stringify(newData)))
}
