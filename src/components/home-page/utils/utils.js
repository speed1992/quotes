import OPTIONS from "../../../static/philosophers-data";
import { changeData, dataCollection, initializeData, setCurrentPhilosopher } from "../../../utils/staticDataUtils";

export const init = () => {
    try {
        let lastReadPhilosopher = localStorage.getItem('lastReadPhilosopher');
        if (checkIfNull()) lastReadPhilosopher = OPTIONS[0].value;
        setCurrentPhilosopher(lastReadPhilosopher);
        if (lastReadPhilosopher) changeData(dataCollection[lastReadPhilosopher])
    }
    catch (e) {
        console.log(e)
        initializeData()

    }
    finally {
    }
}

export function checkIfNull(lastReadPhilosopher) {
    return (lastReadPhilosopher === undefined || lastReadPhilosopher === "undefined" || lastReadPhilosopher === "null")
}