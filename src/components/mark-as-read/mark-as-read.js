import { getReadArrayFromLocalStorage, setReadArrayFromLocalStorage } from '../../common/utils/localStorageUtils'
import { removeReadData } from '../../common/utils/staticDataUtils'

const MarkAsRead = ({ index, setCurrentData, currentPhilosopher }) => {
    var readQuotesArr = getReadArrayFromLocalStorage()

    const clickHandler = () => {
        setReadArrayFromLocalStorage(readQuotesArr, index, currentPhilosopher)
        removeReadData(setCurrentData)
    }

    return <button onClick={clickHandler}>Mark as Read</button>
}

export default MarkAsRead
