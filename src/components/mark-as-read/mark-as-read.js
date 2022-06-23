import { getReadArrayFromLocalStorage, setReadArrayFromLocalStorage } from "../../common/utils/localStorageUtils";
import { removeReadData } from "../../common/utils/staticDataUtils";

const MarkAsRead = ({ index, setTriggerChange }) => {
    var readQuotesArr = getReadArrayFromLocalStorage();

    const clickHandler = () => {
        setReadArrayFromLocalStorage(readQuotesArr, index)
        removeReadData(setTriggerChange);
    }

    return (<button onClick={clickHandler}>Mark as Read</button>)
}

export default MarkAsRead;