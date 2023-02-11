import { setReadArrayFromLocalStorage } from '../../common/utils/localStorageUtils'
import { removeReadData } from '../../common/utils/staticDataUtils'

const MarkAsRead = ({ index, setCurrentData,currentData, currentPhilosopher, markedQuotes, setMarkedQuotes }) => {
    const clickHandler = () => {
        setReadArrayFromLocalStorage({ markedQuotes, setMarkedQuotes }, index, currentPhilosopher)
        removeReadData({ index, setCurrentData,currentData, currentPhilosopher, markedQuotes, setMarkedQuotes })
    }

    return <button onClick={clickHandler}>Mark as Read</button>
}

export default MarkAsRead
