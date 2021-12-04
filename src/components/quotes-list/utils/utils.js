import { isEmpty } from "lodash";
import OPTIONS from "../../../static/philosophers-data";
import { getPhilosopherData } from "../../../static/utils/utils";
import { changeData, currentPhilosopher, dataCollection, setCurrentPhilosopher } from "../../../utils/staticDataUtils";

export const changeQuotesData = (philosopherName) => {
    const { value, quotes } = getPhilosopherData(philosopherName)
    setCurrentPhilosopher(philosopherName)
    changeData(quotes)
}

export const getPhilosopherFullName = () => {
    const currentIndex = OPTIONS.filter(({ value }) => currentPhilosopher === value);
    if (!isEmpty(currentIndex))
        return currentIndex && currentIndex[0].fullName;
}

export const changeQuotesByWordLength = (start, end) => {
    // if (start === 1 && typeof end === "string" && end.trim() === "") resetData()

    if (dataCollection[currentPhilosopher] !== undefined) {


        if (typeof start === "string" && start.trim() === "") start = 0;

        const newData = dataCollection[currentPhilosopher].filter(quote => {
            const wordCount = getWordCount(quote)

            if (end && end !== "") {

                if (wordCount >= start && wordCount <= end) {
                    return true;
                }

            }
            if (end === "") {

                if (wordCount >= start) {
                    return true
                }
            }

            return false;
        });

        changeData(newData);
    }

}

export function getWordCount(str) {
    return str.split(' ')
        .filter(function (n) { return n !== '' })
        .length;
}