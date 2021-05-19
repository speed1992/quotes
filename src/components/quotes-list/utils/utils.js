import { changeData, dataCollection } from "../../../utils/staticDataUtils"

export const changeQuotesData = (name) => {
    let newName = name.toUpperCase().split(" ").join("_");

    // setCurrentPhilosopher(newName)

    changeData(dataCollection[newName])

}