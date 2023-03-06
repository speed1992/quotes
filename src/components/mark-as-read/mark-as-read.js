import { removeReadData } from '../../common/utils/staticDataUtils'

const MarkAsRead = ({ index, setCurrentData, currentData, currentPhilosopher, markedQuotes, setMarkedQuotes }) => {
    const clickHandler = () => {
        removeReadData({ index, setCurrentData, currentData, currentPhilosopher, markedQuotes, setMarkedQuotes })
    }

    return <button onClick={clickHandler}>Mark as Read</button>
}

export default MarkAsRead
