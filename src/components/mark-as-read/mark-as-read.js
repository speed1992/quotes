import { setReadArrayFromLocalStorage } from '../../common/utils/localStorageUtils'
import { removeReadData } from '../../common/utils/staticDataUtils'

const MarkAsRead = ({ index, setCurrentData, currentPhilosopher, markedQuotes, setMarkedQuotes }) => {
    const clickHandler = () => {
        setReadArrayFromLocalStorage({ markedQuotes, setMarkedQuotes }, index, currentPhilosopher)
        removeReadData(setCurrentData)
    }

    return <button onClick={clickHandler}>Mark as Read</button>
}

export default MarkAsRead
