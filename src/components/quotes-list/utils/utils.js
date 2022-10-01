import { isEmpty } from "lodash";
import { changeData, removeReadData } from "../../../common/utils/staticDataUtils";
import { getPhilosopherData } from "../../../static/utils/utils";

export const changeQuotesData = ({philosopher, setCurrentData,options}, markedMode = false) => {
    const { quotes } = getPhilosopherData({philosopher,options})
    setCurrentData(quotes)
    if (markedMode)
        removeReadData();
}

export const getPhilosopherFullName = ({ currentPhilosopher, options }) => {
    const currentIndex = options.filter(({ value }) => currentPhilosopher === value);
    if (!isEmpty(currentIndex))
        return currentIndex && currentIndex[0].fullName;
}

export const getPhilosopherFullName_i10n = ({ currentPhilosopher, options }) => {
    const currentIndex = options.filter(({ value }) => currentPhilosopher === value);
    if (!isEmpty(currentIndex))
        return currentIndex && currentIndex[0].fullNameInOtherLanguages;
}

export const searchByWordLength = (start, end, quotes, markedMode) => {
    if (quotes !== undefined) {
        if (typeof start === "string" && start.trim() === "") start = 0;

        const newData = quotes.filter(({ quote }) => {
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
        if (markedMode)
            removeReadData()
    }

}

export function getWordCount(str) {
    return str.split(' ')
        .filter(function (n) { return n !== '' })
        .length;
}