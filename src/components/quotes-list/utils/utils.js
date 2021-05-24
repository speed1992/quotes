import { isEmpty } from "lodash";
import { OPTIONS } from "../../../constants/constants";
import { changeData, currentPhilosopher, dataCollection, setCurrentPhilosopher } from "../../../utils/staticDataUtils";

export const changeQuotesData = (name) => {

    const currentPhilosopherArray = OPTIONS.filter(({ value }) => {
        return (name === value)
    });

    setCurrentPhilosopher(currentPhilosopherArray[0].value)

    changeData(dataCollection[currentPhilosopherArray[0].value])

}

export const getPhilosopherFullName = () => {
    const currentIndex = OPTIONS.filter(({ value }) => currentPhilosopher === value);
    if (!isEmpty(currentIndex))
        return currentIndex && currentIndex[0].fullName;
}