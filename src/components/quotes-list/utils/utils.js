import { changeData, dataCollection } from "../../../utils/staticDataUtils"

export const changeQuotesData = (name, callback) => {
    let newName = name.toUpperCase().split(" ").join("_");
    console.log(newName)
    console.log(dataCollection[newName])
    console.log(dataCollection);
    changeData(dataCollection[newName])

    callback();
}