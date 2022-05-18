import { getStorageValue, setStorageValue } from "../../common/utils/localStorageUtils";
import { READ_ARRAY_LOCALSTORAGE_KEY } from "./constants";

export const MarkAsRead = ({ index }) => {
    let readQuotesArr = getStorageValue(READ_ARRAY_LOCALSTORAGE_KEY, []);

    const clickHandler = () => {
        readQuotesArr.push(index);
        readQuotesArr = [...new Set(readQuotesArr)];
        setStorageValue(READ_ARRAY_LOCALSTORAGE_KEY, readQuotesArr);
        
    }

    return (<button onClick={clickHandler}>Mark as Read</button>)
}