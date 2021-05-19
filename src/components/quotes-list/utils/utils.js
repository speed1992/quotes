import { changeData } from "../../../utils/staticDataUtils"

export const changeQuotesData = (name) => {
    let newName = name.toUpperCase().split(" ").join("_");
    console.log(newName)
    
    // changeData()
}